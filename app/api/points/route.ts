import { getAPoints, getAllPoints } from "@/sdk/db/points";
import { fetchNewUserById } from "@/sdk/db/user";
import { NextResponse } from "next/server";
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
	const allPointusers = await getAPoints();
	const b = allPointusers.map(async (el: any) => {
		const p = await fetchNewUserById(el.tgId);
		const a: any = el?.points;
		if (a) {
			return objectModifier(p, "contestP", a["contestPoint"]);
		} else {
			return objectModifier(p, "contestP", "0");
		}
	});
	const c = await Promise.all(b).then((values) => values);

	return NextResponse.json({ msg: c });
}
