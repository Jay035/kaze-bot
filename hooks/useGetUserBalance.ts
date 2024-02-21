import React from "react";
import useWallet from "./useWallet";
import { getUsersSpecificTokenBlance } from "@/sdk/store";

export default function useGetUserBalance() {
	const Wallet = useWallet();
	async function fetchUserSpecificBalance(tokenAddress: string) {
		const account = Wallet.account.address;
		const tokenBalance = await getUsersSpecificTokenBlance(
			account,
			tokenAddress
		);
		console.log({ account, tokenBalance });
		return tokenBalance;
	}
	return { fetchUserSpecificBalance };
}
