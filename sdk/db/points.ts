import { prisma } from "../";

export async function getAllPoints(tgId: string) {
	return await prisma.points.findUnique({
		select: { points: true },
		where: { tgId },
	});
}
