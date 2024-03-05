import { getAllUsers } from "@/sdk/db/user";
import { getAllPoints } from "@/sdk/db/points";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from 'next';
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


export async function GetAllUsers(
	req: NextApiRequest,
	res: NextApiResponse
  ) {
	try {
	  const response = await fetch('https://kaze-api.onrender.com/api/users');
  
	  if (!response || !response.ok) {
		throw new Error(`Error fetching users from external API: ${response ? response.statusText : 'Unknown error'}`);
	  }
  
	  const usersFromAPI = await response.json();
  return usersFromAPI;
	//   res.status(200).json(usersFromAPI);
	//   console.log(usersFromAPI);
	} catch (error) {
		console.error('Error fetching users:', error);
		throw error; // Re-throw the error to handle it elsewhere if needed
	  }
	// } catch (error) {
	//   console.error('Error fetching users:', error);
	//   res.status(500).json({ error: 'Internal Server Error' });
	// }


	// 	let res = await getAllUsers(nextSkip);
	// 	//	console.log({ res });
	// 	const b = res.map(async (el: any) => {
	// 		const p = await getAllPoints(el.tgId);
	// 		const a: any = p?.points;
	// 		if (a) {
	// 			return objectModifier(el, "contestP", a["contestPoint"]);
	// 		} else {
	// 			return objectModifier(el, "contestP", "0");
	// 		}
	// 	});
	// 	//console.log({ b });
	// 	const c = await Promise.all(b).then((values) => values);
	// 	//console.log({ c });
	// 	return c;
	// 	//c);
	// } catch (error) {
	// 	console.log({ error });
	// 	return error;
	// }
}


// Todo - put the get all user endpoints here
	/**
	 * this is the api endpoint
	 * https://kaze-api.onrender.com/api/users
	 *
	 * with query for pagination
	 * https://kaze-api.onrender.com/api/users?nextSkip=20
	 */