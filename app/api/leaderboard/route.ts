import { NextResponse, NextRequest } from "next/server";
import { getAllUsers } from "@/sdk/db/user";

export async function GET(req: NextRequest) {
	try {
		const res = await getAllUsers();
		return NextResponse.json(
			res.sort((a, b) => b.referralCount - a.referralCount)
		);
		//c);
	} catch (error) {
		console.log({ error });
		return NextResponse.json({ error });
	}
}
