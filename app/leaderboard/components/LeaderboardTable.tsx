"use client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  username: string;
  referrals: number;
  points: number;
};

export default function LeaderboardTable({ data }: any) {
  const [isRoyaltyPointInAscendingOrder, setIsRoyaltyPointInAscendingOrder] =
    useState(false);
  const [isContestPointInAscendingOrder, setIsContestPointInAscendingOrder] =
    useState(false);
  const [isReferralInAscendingOrder, setIsReferralInAscendingOrder] =
    useState(false);

  const toggleRoyaltyPoints = () => {
    setIsRoyaltyPointInAscendingOrder((prevState) => !prevState);
  };

  const toggleContestPoints = () => {
    setIsContestPointInAscendingOrder((prevState) => !prevState);
  };

  const toggleReferral = () => {
    setIsReferralInAscendingOrder((prevState) => !prevState);
  };
  return (
    <div className="w-full grid grid-cols-1 mb-24 overflow-x-auto bg-[#111]">
      <table className="w-full table-auto">
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
            <> Data Not Found</>
          )}
        </tbody>
      </table>
    </div>
  );
}
