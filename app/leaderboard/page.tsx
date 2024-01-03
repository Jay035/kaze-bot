import { GetAllUsers } from "@/sdk/handlers/getAllUsers";
import LeaderboardTable from "./components/LeaderboardTable";

type Props = {
  username: string;
  referrals: number;
  points: number;
};

export default async function Leaderboard() {
  const data: any = await GetAllUsers(0);

  return (
    <main
      id="leaderboard"
      className="px-5 md:px-20 2xl:px-44 text-white mt-32 xl:mt-44 h-full min-h-screen"
    >
      <div className="mb-14 lg:mb-20">
        <span className="tracking-[-0.05rem] font-aspekta-light-250 text-3xl lg:text-[2.5rem]">
          Leaderboard - <span className="text-[#FEF1A7]">KazeBot</span>
        </span>
      </div>
      <LeaderboardTable data={data} />
    </main>
  );
}
