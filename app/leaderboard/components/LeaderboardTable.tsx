"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  username: string;
  referrals: number;
  points: number;
};

function sortByReferral(data: any) {
  return data.sort(
    (a: any, b: any) => parseInt(b.referralCount) - parseInt(a.referralCount)
  );
}
function sortByRoyaPoints(data: any) {
  return data.sort((a: any, b: any) => parseInt(b.points) - parseInt(a.points));
}
function sortByContestPoints(data: any) {
  return data.sort(
    (a: any, b: any) => parseInt(b.contestP) - parseInt(a.contestP)
  );
}

//
export default function LeaderboardTable({ data }: any) {
  const [userData, setUserData]: any = useState();
  const [isRoyaltyPointInAscendingOrder, setIsRoyaltyPointInAscendingOrder] =
    useState(false);
  const [isContestPointInAscendingOrder, setIsContestPointInAscendingOrder] =
    useState(false);
  const [isReferralInAscendingOrder, setIsReferralInAscendingOrder] =
    useState(false);

  const toggleRoyaltyPoints = () => {
    setUserData(sortByRoyaPoints(data));
    setIsRoyaltyPointInAscendingOrder((prevState) => !prevState);
  };

  const toggleContestPoints = () => {
    setUserData(sortByContestPoints(data));
    setIsContestPointInAscendingOrder((prevState) => !prevState);
  };

  const toggleReferral = () => {
    setUserData(sortByReferral(data));
    setIsReferralInAscendingOrder((prevState) => !prevState);
  };

  useEffect(() => {
    setUserData(data);
  }, []);

  return (
    <section>
      <div className="w-full grid grid-cols-1 mb-24 overflow-x-auto">
        <table className="w-full table-auto bg-[#111]">
          <thead className="bg-[#26272B]">
            <tr className="whitespace-nowrap text-left font-aspekta-medium ">
              <th
                data-aos="fade-in"
                className="text-[#D0D5DD] w-fit text-xs lg:text-[1.19rem] "
                id="telegram-username"
              >
                TELEGRAM USERNAME
              </th>
              <th
                data-aos="fade-in"
                className="text-[#D0D5DD] text-xs lg:text-[1.19rem] cursor-pointer"
                id="referrals"
                onClick={toggleReferral}
              >
                REFERRALS
                <i
                  className={`ml-1 ${
                    isReferralInAscendingOrder
                      ? "ri-arrow-down-s-line"
                      : "ri-arrow-up-s-line"
                  }`}
                ></i>
              </th>
              <th
                data-aos="fade-in"
                className="text-[#D0D5DD] text-xs lg:text-[1.19rem] cursor-pointer"
                id="price"
                onClick={toggleRoyaltyPoints}
              >
                ROYALTY POINTS
                <i
                  className={`ml-1 ${
                    isRoyaltyPointInAscendingOrder
                      ? "ri-arrow-down-s-line"
                      : "ri-arrow-up-s-line"
                  }`}
                ></i>
              </th>
              <th
                data-aos="fade-in"
                className="text-[#D0D5DD] text-xs lg:text-[1.19rem] cursor-pointer"
                id="price"
                onClick={toggleContestPoints}
              >
                CONTEST POINTS
                <i
                  className={`ml-1 ${
                    isContestPointInAscendingOrder
                      ? "ri-arrow-down-s-line"
                      : "ri-arrow-up-s-line"
                  }`}
                ></i>
              </th>
            </tr>
          </thead>
          <tbody className="mt-[1.19rem] text-sm max-h-20 h-fit">
            {userData?.length > 0 ? (
              userData?.map((d: any, index: any) => (
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
                            //   placeholder="blur"
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
                            //   placeholder="blur"
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
                            //   placeholder="blur"
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
                  >
                    {d?.referralCount}
                  </td>
                  <td
                    className="text-[#98A2B3] font-aspekta-light-250 md:text-xl xl:text-2xl"
                    data-aos="fade-in"
                  >
                    {d?.points}
                  </td>
                  <td
                    className="text-[#98A2B3] font-aspekta-light-250 md:text-xl xl:text-2xl"
                    data-aos="fade-in"
                  >
                    {d.contestP}
                  </td>
                </tr>
              ))
            ) : (
              <div className="my-8 flex justify-center items-center">
                <span className=" table-loader"></span>
              </div>
            )}
          </tbody>
        </table>
      </div>
      <div className="my-16 flex justify-center items-center gap-8">
        {/* add this to the button classname for disabled state */}
        {/* opacity-50 */}
        <button className="bg-[#98A2B3] hover:bg-[#98A2B3] h-8 md:h-10 w-8 md:w-10 rounded-full">
          <i className="ri-arrow-left-s-line font-semibold text-black text-xl"></i>
        </button>
        <button className="bg-[#98A2B3] hover:bg-[#b7c0d1] h-8 md:h-10 w-8 md:w-10 rounded-full">
          <i className="ri-arrow-right-s-line font-semibold text-black text-xl"></i>
        </button>
      </div>
    </section>
  );
}
