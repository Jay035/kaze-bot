import { User } from "@prisma/client";
import { Trader, prisma } from "../";
import { getAllPoints } from "./points";

export async function createNewUser(
	tgId: any,
	userName: any,
	privateKey: any,
	mnemonic: any,
	slippage: any,
	buyAmount: any,
	sellAmount: any,
	rewards: any
) {
	await prisma.user.create({
		data: {
			tgId,
			userName,
			privateKey,
			mnemonic,
			autoBuy: false,
			autoSell: false,
			slippage,
			buyAmount,
			sellAmount,
			tokens: [],
			points: 0,
			referralCount: 0,
			referrer: 0,
			TradeVolume: 0,
		},
	});
}
export async function updateUser(id: string, updateData: Partial<Trader>) {
	return await prisma.user.update({ where: { tgId: id }, data: updateData });
}
export async function fetchNewUserById(id: string) {
	return await prisma.user.findUnique({ where: { tgId: id } });
}
export async function getAllUsers() {
	const users = await prisma.user.findMany({
		select: {
			points: true,
			id: true,
			userName: true,
			tgId: true,
			referralCount: true,
			referrer: true,
		},
		where: {
			referralCount: { gt: 10 },
		},
	});

	return users;
}
