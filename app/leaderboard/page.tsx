type Props = {
  username: string;
  referrals: number;
  points: number;
};

const LeaderboardData = [
  {
    //   id: 1,
    username: "USER 1",
    referrals: 10,
    points: 100,
  },
  {
    //   id: 1,
    username: "USER 1",
    referrals: 10,
    points: 100,
  },
  {
    //   id: 1,
    username: "USER 1",
    referrals: 10,
    points: 100,
  },
  {
    //   id: 1,
    username: "USER 1",
    referrals: 10,
    points: 100,
  },
  {
    //   id: 1,
    username: "USER 1",
    referrals: 10,
    points: 100,
  },
  {
    //   id: 1,
    username: "USER 1",
    referrals: 10,
    points: 100,
  },
  {
    //   id: 1,
    username: "USER 1",
    referrals: 10,
    points: 100,
  },
  {
    //   id: 1,
    username: "USER 1",
    referrals: 10,
    points: 100,
  },
  {
    //   id: 1,
    username: "USER 1",
    referrals: 10,
    points: 100,
  },
  {
    //   id: 1,
    username: "USER 1",
    referrals: 10,
    points: 100,
  },
  {
    //   id: 1,
    username: "USER 1",
    referrals: 10,
    points: 100,
  },
  {
    //   id: 1,
    username: "USER 1",
    referrals: 10,
    points: 100,
  },
  {
    //   id: 1,
    username: "USER 1",
    referrals: 10,
    points: 100,
  },
  {
    //   id: 1,
    username: "USER 1",
    referrals: 10,
    points: 100,
  },
];

export function Leaderboard({}: Props) {
  return (
    <main
      id="leaderboard"
      className="px-5 md:px-20 xl:px-28 2xl:px-44 text-white mt-32 xl:mt-44"
    >
      <div className="mb-24">
        <span className="tracking-[-0.05rem] font-aspekta-light-250 text-3xl lg:text-[2.5rem]">
          Leaderboard - <span className="text-[#FEF1A7]">KazeBot</span>
        </span>
      </div>
      <div className="w-fit md:w-full grid grid-cols-1 mb-24 overflow-x-auto bg-[#111]">
        <table className="w-full table-auto">
          <thead className="bg-[#26272B]">
            <tr className="whitespace-nowrap text-left font-aspekta-medium">
              <th
                data-aos="fade-in"
                className="text-[#D0D5DD] text-sm lg:text-[1.19rem]"
                id="telegram-username"
              >
                TELEGRAM USERNAME
              </th>
              <th
                data-aos="fade-in"
                className="text-[#D0D5DD] text-sm lg:text-[1.19rem]"
                id="referrals"
              >
                REFERRALS
              </th>
              <th
                data-aos="fade-in"
                className="text-[#D0D5DD] text-sm lg:text-[1.19rem]"
                id="price"
              >
                POINTS
              </th>
            </tr>
          </thead>
          <tbody className="mt-[1.19rem] text-sm">
            {LeaderboardData?.map((data: Props, index) => (
              <tr key={index} className="whitespace-nowrap">
                <th
                  // id={data?.id}
                  data-aos="fade-in"
                  className="text-left text-xl xl:text-2xl w-[40rem] font-aspekta-light-250"
                >
                  <span className="text-[#FEF1A7] mr-6 lg:mr-8 font-aspekta-bold-800">
                    {index + 1}.
                  </span>
                  {data?.username}
                </th>
                <td
                  className="text-[#98A2B3] font-aspekta-light-250 text-xl xl:text-2xl"
                  data-aos="fade-in"
                  //   headers={`project ${data?.id}`}
                >
                  {data?.referrals}
                </td>
                <td
                  className="text-[#98A2B3] font-aspekta-light-250 text-xl xl:text-2xl"
                  data-aos="fade-in"
                  //   headers={`sale-type ${data?.id}`}
                >
                  {data?.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
