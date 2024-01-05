"use client";
import { GlobalContext } from "@/context/Context";
import { ReactNode, useState } from "react";
import CustomInput from "./CustomInput";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

export default function BurnTokenModal() {
  const { isModalShowing, setIsModalShowing } = GlobalContext();

  const [burningToken, setBurningToken] = useState(false);
  const [isBurnSuccessful, setIsBurnSuccessful] = useState(false);
  if (!isModalShowing) return null;

  const burnToken = () => {
    setBurningToken(true);
    setTimeout(() => {
      setIsBurnSuccessful(true)
    }, 2000);
  };

  return (
    <main
      id="modal"
      className="bg-[#18181b]/50 backdrop-blur-[1px] w-full absolute flex min-h-screen justify-center items-center z-[9999999999]"
    >
      {/* modal */}
      <div className="bg-[#3F3F46] relative p-0.5 w-full max-w-[30rem] mx-8 rounded-2xl">
        <i
          onClick={() => {
            setIsModalShowing?.(false);
            document.body.style.overflow = "unset";
          }}
          className="ri-close-line text-white absolute z-10 top-[1.56rem] right-[2.75rem] cursor-pointer text-2xl md:text-3xl font-medium"
        ></i>
        {!isBurnSuccessful ? (
          <>
            {burningToken ? (
              <div className="bg-[#18181B] text-center relative text-white w-full rounded-2xl p-6 xl:p-8 pt-[4.75rem] pb-14 md:w-full h-fit max-h-[90vh] overflow-y-auto max-w-[45rem]">
                <h1 className="tracking-[-0.015rem] font-medium text-xl md:text-2xl">
                  Burning Tokens in progress...
                </h1>
                <div className="bg-[#3F3F46] w-[21rem] mx-auto mt-[0.94rem] p-[0.05rem] rounded-[0.625rem]">
                  <div className="bg-[#26272B] p-4 rounded-[0.625rem] flex gap-[0.88rem]">
                    <div className="bg-[#FEF1A7] rounded-[1.75rem] w-8 h-8 p-1">
                      <Image
                        src="/flame.svg"
                        alt="flame icon"
                        width="0"
                        height="0"
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <h2 className="text-sm text-left font-medium">
                        Kaze bot burn transaction
                      </h2>
                      {/* progress bar */}
                      <div className="flex gap-3 items-center">
                        <div className="bg-[#EAECF0] w-full h-2 rounded-xl">
                          <div className="bg-[#69FF77] w-[80%] rounded-xl h-full"></div>
                        </div>
                        <p className="text-sm font-medium text-[#EAECF0]">
                          80%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#18181B] text-center text-white w-full rounded-[0.625rem] p-6 xl:p-8 pt-10 pb-12 md:w-full h-fit max-h-[90vh] overflow-y-auto max-w-[45rem]">
                <h1 className="tracking-[-0.015rem] font-medium text-xl md:text-2xl">
                  Burn Tokens
                </h1>

                <i
                  onClick={() => {
                    setIsModalShowing?.(false);
                    document.body.style.overflow = "unset";
                  }}
                  className="ri-close-line text-white absolute top-[1.56rem] right-[2.75rem] cursor-pointer text-2xl md:text-3xl font-medium"
                ></i>
                <p className="pt-[1.5rem]">
                  Are you sure you want to burn these tokens. This action is
                  permanent and cannot be reversed
                </p>
                <div className="flex gap-6 mt-10 md:items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsModalShowing?.(true);
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    className="text-[#A0A0AB] text-lg leading-10 tracking-tight text-center rounded-[0.625rem]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      burnToken();
                      // setIsModalShowing?.(true);
                      // window.scrollTo({
                      //   top: 0,
                      //   behavior: "smooth",
                      // });
                    }}
                    type="submit"
                    className={`bg-[#69FF77] leading-10 font-medium text-lg disabled:bg-[#69FF77]/80 tracking-[-0.0225rem] hover:bg-[#69FF77]/80 w-40 text-center rounded-[6.25rem] p-[0.6rem] text-black`}
                  >
                    Proceed to burn
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="bg-[#18181B] flex items-center flex-col text-center text-white w-full rounded-2xl p-6 xl:p-8 pt-10 pb-12 md:w-full h-fit max-h-[90vh] overflow-y-auto max-w-[45rem]">
            <Image
              src="/badge-check.svg"
              width="0"
              height="0"
              className="w-[3.9rem] h-[3.9rem]"
              alt="check mark"
            />
            <h1 className="tracking-[-0.015rem] mb-[1.2rem] mt-[0.3rem] font-medium text-xl md:text-2xl">
              Token burn successful
            </h1>
            <div className="bg-[#3F3F46] w-[21rem] mx-auto mt-[0.94rem] p-[0.05rem] rounded-[0.625rem]">
              <div className="bg-[#26272B] p-4 rounded-[0.625rem] flex gap-[0.88rem]">
                <div className="bg-[#FEF1A7] cursor-pointer rounded-[1.75rem] w-8 h-8 p-1">
                  <Image
                    src="/copy.svg"
                    alt="copy icon"
                    width="0"
                    height="0"
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex text-left flex-col gap-1 w-full">
                  <h2 className="text-[0.5rem] md:text-xs text-[#D1D1D6]">
                    TRANSACTION ID
                  </h2>
                  <p className="break-words w-60 text-xs tracking-[-0.015rem]">
                    6F075867122EF209D2C36F833193AB6C9621749324A09655174FEFDB181E2DA2
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
