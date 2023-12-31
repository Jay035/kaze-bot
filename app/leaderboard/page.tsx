import { GetAllUsers } from "@/sdk/handlers/getAllUsers";
import Image from "next/image";

type Props = {
	username: string;
	referrals: number;
	points: number;
};

export default async function Leaderboard() {
	const data: any = await GetAllUsers();
	//	console.log({ data });
	return (
		<main
			id="leaderboard"
			className="px-5 md:px-20 xl:px-28 2xl:px-44 text-white mt-32 xl:mt-44"
		>
			<div className="mb-24">
				<span className="tracking-[-0.05rem] font-aspekta-light-250 text-3xl lg:text-[2.5rem]">
					Leaderboard -{" "}
					<span className="text-[#FEF1A7]">KazeBot</span>
				</span>
			</div>
			<div className="w-full grid grid-cols-1 mb-24 overflow-x-auto bg-[#111]">
				<table className="w-full table-auto">
					<thead className="bg-[#26272B]">
						<tr className="whitespace-nowrap text-left font-aspekta-medium">
							<th
								data-aos="fade-in"
								className="text-[#D0D5DD] text-xs lg:text-[1.19rem]"
								id="telegram-username"
							>
								TELEGRAM USERNAME
							</th>
							<th
								data-aos="fade-in"
								className="text-[#D0D5DD] text-xs lg:text-[1.19rem]"
								id="referrals"
							>
								REFERRALS
							</th>
							<th
								data-aos="fade-in"
								className="text-[#D0D5DD] text-xs lg:text-[1.19rem]"
								id="price"
							>
								ROYALTY POINTS
							</th>
							<th
								data-aos="fade-in"
								className="text-[#D0D5DD] text-xs lg:text-[1.19rem]"
								id="price"
							>
								CONTEST POINTS
							</th>
						</tr>
					</thead>
					<tbody className="mt-[1.19rem] text-sm">
						{/* <>{console.log(data)}</> */}

						{data ? (
							data?.map((d: any, index: any) => (
								<tr key={index} className="whitespace-nowrap">
									<th
										// id={data?.id}
										data-aos="fade-in"
										className="text-left md:text-xl xl:text-2xl md:w-[40rem] font-aspekta-light-250 flex items-center gap-2 md:gap-8"
									>
										<span className="text-[#FEF1A7] font-aspekta-bold-800">
											{index + 1}.
										</span>
										<span className="flex items-center gap-3 md:gap-5">
											{index === 0 && (
												<div className="w-8">
													<Image
														width={48}
														height={48}
														src="/assets/gold-circle.svg"
														alt="circle"
													/>
												</div>
											)}
											{index === 1 && (
												<div className="w-8">
													<Image
														width={48}
														height={48}
														src="/assets/silver-circle.svg"
														alt="circle"
													/>
												</div>
											)}
											{index === 2 && (
												<div className="w-8">
													<Image
														width={48}
														height={48}
														src="/assets/circle-3.svg"
														alt="circle"
													/>
												</div>
											)}
											{d?.userName}
										</span>
									</th>
									<td
										className="text-[#98A2B3] font-aspekta-light-250 md:text-xl xl:text-2xl"
										data-aos="fade-in"
										//   headers={`project ${data?.id}`}
									>
										{d?.referralCount}
									</td>
									<td
										className="text-[#98A2B3] font-aspekta-light-250 md:text-xl xl:text-2xl"
										data-aos="fade-in"
										//   headers={`sale-type ${data?.id}`}
									>
										{d?.points}
									</td>
									<td
										className="text-[#98A2B3] font-aspekta-light-250 md:text-xl xl:text-2xl"
										data-aos="fade-in"
										//   headers={`sale-type ${data?.id}`}
									>
										{/* <>{console.log(d)}</> */}
										{d.contestP}
									</td>
								</tr>
							))
						) : (
							<> Data Not Found</>
						)}
					</tbody>
				</table>
			</div>
		</main>
	);
}
