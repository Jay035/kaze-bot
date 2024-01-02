import { prisma } from "../";

export async function getAllPoints(tgId: string) {
	return await prisma.points.findUnique({
		select: { points: true, tgId: true },
		where: { tgId },
	});
}

export async function getAPoints() {
	return await prisma.points.findMany({
		select: { points: true, tgId: true },
	});
}
