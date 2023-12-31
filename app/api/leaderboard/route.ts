import { NextResponse, NextRequest } from "next/server";
import { getAllUsers } from "@/sdk/db/user";
import { getAllPoints } from "@/sdk/db/points";

function objectModifier(object: any, fieldName: string, value: any) {
	if (object.hasOwnProperty(fieldName)) {
		// Update the existing field
		object[fieldName] = value;
	} else {
		// Create a new field
		object[fieldName] = value;
	}

	return object;
}
export async function GET() {
	try {
		let res = await getAllUsers();
		//	console.log({ res });
		const b = res.map(async (el) => {
			const p = await getAllPoints(el.tgId);
			const a: any = p?.points;
			if (a) {
				return objectModifier(el, "contestP", a["contestPoint"]);
			} else {
				return objectModifier(el, "contestP", "0");
			}
		});
		//console.log({ b });
		const c = await Promise.all(b).then((values) => values);
		//console.log({ c });
		return NextResponse.json(c);
		//c);
	} catch (error) {
		console.log({ error });
		return NextResponse.json({ error });
	}
}
