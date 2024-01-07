"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../../pagination.css";
import { useRouter, useSearchParams } from "next/navigation";
import { PaginationControls } from "./Pagination";

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
  const d = data.sort(
    (a: any, b: any) => parseInt(b.contestP) - parseInt(a.contestP)
  );
  return d.filter((el: any) => parseFloat(el.contestP) > 0);
}

export default function LeaderboardTable({
  data,
}: // end,
// start,
// perPage,
// page,
any) {
  const [userData, setUserData]: any = useState();
  // const entries = userData?.slice(start, end);
  const [loading, setLoading] = useState<boolean>(false);
  const [isRoyaltyPointInAscendingOrder, setIsRoyaltyPointInAscendingOrder] =
    useState(false);
  const [isContestPointInAscendingOrder, setIsContestPointInAscendingOrder] =
    useState(false);
  const [isReferralInAscendingOrder, setIsReferralInAscendingOrder] =
    useState(false);
  // ------ Loading
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  const toggleRoyaltyPoints = () => {
    startLoading();
    setCurrentPage(1);
    // update data after sorting
    setUserData(sortByRoyaPoints(data));
    setTimeout(() => {
      stopLoading();
    }, 500);
    setIsRoyaltyPointInAscendingOrder((prevState) => !prevState);
  };

  const toggleContestPoints = () => {
    startLoading();
    setCurrentPage(1);
    let url = "https://kaze-api.onrender.com/api/points";

    let options = {
      method: "GET",
      headers: { "User-Agent": "insomnia/8.4.5" },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        // update data after sorting
        setUserData(sortByContestPoints(json.data));
        setTimeout(() => {
          stopLoading();
        }, 500);
        // console.log(json?.data);
      })
      .catch((err) => {
        console.error("error:" + err);
        setTimeout(() => {
          stopLoading();
        }, 1000);
      });

    setIsContestPointInAscendingOrder((prevState) => !prevState);
  };

  const toggleReferral = () => {
    startLoading();
    setCurrentPage(1);
    // update data after sorting
    setUserData(sortByReferral(data));
    setTimeout(() => {
      stopLoading();
    }, 1000);
    setIsReferralInAscendingOrder((prevState) => !prevState);
  };

  // -------------------------------------------------------
  // PAGINATION
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const pagesVisited = currentPage + itemsPerPage;
  // console.log(`Loading items from ${currentPage} to ${pagesVisited}`);
  const currentItems = userData?.slice(currentPage, pagesVisited);
  const pageCount = Math.ceil(userData?.length / itemsPerPage);

  const handlePaginationButtonClick = ({ selected }: any) => {
    const newPage = (selected * itemsPerPage) % userData.length;
    setCurrentPage(newPage);
  };

  useEffect(() => {
    setUserData(sortByReferral(data));
  }, []);

  return userData ? (
    <div className="w-full">
      {loading ? (
        <div className="my-8 flex justify-center items-center">
          <span className="table-loader"></span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 mb-24 overflow-x-auto h-full max-h-96 md:max-h-[30rem] w-full text-left">
            <table className=" bg-[#111]">
              <thead className="bg-[#26272B]">
                <tr className="font-aspekta-medium">
                  <th
                    className="text-[#D0D5DD] text-xs lg:text-[1.19rem]"
                    //   id="telegram-username"
                  >
                    TELEGRAM USERNAME
                  </th>
                  <th
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
                    className="text-[#D0D5DD] lg:whitespace-nowrap text-xs lg:text-[1.19rem] cursor-pointer"
                    id="royalty-points"
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
                    className="text-[#D0D5DD] lg:whitespace-nowrap text-xs lg:text-[1.19rem] cursor-pointer"
                    id="contest-points"
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
              <tbody className="mt-[1.19rem] text-sm w-full">
                {userData?.length > 0 ? (
                  userData?.map((d: any, index: any) => (
                    <tr key={index} className="">
                      <th className="md:text-xl xl:text-2xl font-aspekta-light-250 w-fit flex items-center gap-2 md:gap-8">
                        <span className="text-[#FEF1A7] font-aspekta-bold-800">
                          {index + 1}.
                        </span>
                        <span className="flex items-center gap-3 md:gap-5">
                          {index === 0 && (
                            <div className="w-8 hidden lg:inline-block">
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
                            <div className="w-8 hidden lg:inline-block">
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
                            <div className="w-8 hidden lg:inline-block">
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
                      <td className="text-[#98A2B3] font-aspekta-light-250 md:text-xl xl:text-2xl">
                        {d?.referralCount}
                      </td>
                      <td className="text-[#98A2B3] font-aspekta-light-250 md:text-xl xl:text-2xl">
                        {d?.points}
                      </td>
                      <td className="text-[#98A2B3] font-aspekta-light-250 md:text-xl xl:text-2xl">
                        {d.contestP}
                      </td>
                    </tr>
                  ))
                ) : (
                  <>DATA NOT FOUND</>
                )}
              </tbody>
            </table>
          </div>
          <div className="mb-16 flex justify-center items-center gap-8">
            {/* <button className="bg-[#98A2B3] hover:bg-[#b7c0d1] h-8 md:h-10 w-8 md:w-10 rounded-full">
              <i className="ri-arrow-left-s-line font-semibold text-black text-xl"></i>
            </button>
            <button className="bg-[#98A2B3] hover:bg-[#b7c0d1] h-8 md:h-10 w-8 md:w-10 rounded-full">
              <i className="ri-arrow-right-s-line font-semibold text-black text-xl"></i>
            </button> */}
            {/* <PaginationControls
              hasNextPage={end < userData?.length}
              hasPrevPage={start > 0}
            /> */}

            {/* <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePaginationButtonClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              containerClassName={"paginationBtns"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            /> */}
          </div>
        </>
      )}
    </div>
  ) : (
    <div className="my-8 flex justify-center items-center">
      <span className="table-loader"></span>
    </div>
  );
}
