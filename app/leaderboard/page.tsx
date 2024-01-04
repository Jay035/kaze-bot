import { GetAllUsers } from "@/sdk/handlers/getAllUsers";
import LeaderboardTable from "./components/LeaderboardTable";

export default async function Leaderboard({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data: any = await GetAllUsers(0);
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "20";

  const start = (Number(page) - 1) * Number(per_page); // 0, 20, 40 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  return (
    <main
      id="leaderboard"
      className="px-5 md:px-20 2xl:px-44 text-white mt-28 xl:mt-44 h-full min-h-screen"
    >
      <div className="mb-12 lg:mb-20">
        <span className="tracking-[-0.05rem] font-aspekta-light-250 text-3xl lg:text-[2.5rem]">
          Leaderboard - <span className="text-[#FEF1A7]">KazeBot</span>
        </span>
      </div>
      <LeaderboardTable data={data} page={page} perPage={per_page} start={start} end={end} />
    </main>
  );
}
