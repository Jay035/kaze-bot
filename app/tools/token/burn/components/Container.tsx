"use client";
import CustomInput from "@/components/CustomInput";
import Modal from "@/components/Modal";
import { GlobalContext } from "@/context/Context";
import Image from "next/image";
import { useState } from "react";

type Props = {};

export default function Container({}: Props) {
  const { isModalShowing, setIsModalShowing, showModal, toggleModal } =
    GlobalContext();
  const [mintAddress, setMintAddress] = useState<string>("");
  const [burnAmount, setBurnAmount] = useState<number>(0);
  const [addressVerified, setAddressVerified] = useState<boolean>(false);
  const [burningToken, setBurningToken] = useState(false);
  const [isBurnSuccessful, setIsBurnSuccessful] = useState(false);

  const verifyAddress = () => {
    setAddressVerified(true);
  };

  const burnToken = () => {
    setBurningToken(true);
    setTimeout(() => {
      setIsBurnSuccessful(true);
    }, 2000);
  };

  return (
    <form className="flex flex-col gap-8 mb-28 lg:mb-32">
      <Modal isBurnSuccessful={isBurnSuccessful}>
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
              <div className="bg-[#15153c] text-center text-white w-full rounded-2xl p-6 xl:p-8 pt-10 pb-12 md:w-full h-fit max-h-[90vh] overflow-y-auto max-w-[45rem]">
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
      </Modal>
      <>
        <CustomInput
          id="mintAddress"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Mint address"
          type="text"
          placeholder="Enter Mint address"
          value={mintAddress}
          onChange={(e) => {
            setMintAddress?.(e.target.value);
            verifyAddress();
          }}
          isRequired={false}
        />
        <button
          type="submit"
          disabled={mintAddress === ""}
          className="bg-[#69FF77] w-[4.7rem] border-[#51525C] border disabled:bg-[#69FF77]/50 tracking-[-0.00875rem] hover:bg-[#69FF77]/80 text-center rounded-[0.625rem] text-sm font-semibold py-[0.9rem] px-5 text-black"
        >
          Load
        </button>
      </>
      {/* Token information */}
      {addressVerified && (
        <div className="flex flex-col gap-8">
          <div className="">
            <h2>Token Information</h2>
            <div className="p-[0.07rem] mt-3 w-full group bg-gradient-to-b from-[#51525C] to-[#414149] hover:bg-[#F4F4F5] rounded-[0.625rem]">
              <div className="bg-[#26272B] rounded-[0.625rem] py-[0.89rem] px-[1.19rem] flex flex-col gap-[0.62rem]">
                {/* Token name */}
                <section className="flex justify-between items-center">
                  <p className="text-sm tracking-[-0.00875rem] text-[#D1D1D6]">
                    Token name
                  </p>
                  <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
                    Kaze-bot
                  </p>
                </section>
                {/* Token symbol */}
                <section className="flex justify-between items-center">
                  <p className="text-sm tracking-[-0.00875rem] text-[#D1D1D6]">
                    Token symbol
                  </p>
                  <p className="bg-black p-1 rounded-[1.9rem]">
                    <Image
                      className="w-5 h-4"
                      width="0"
                      height="0"
                      src="/logo.svg"
                      alt="token logo"
                    />
                  </p>
                </section>
                {/* Token decimals */}
                <section className="flex justify-between items-center">
                  <p className="text-sm tracking-[-0.00875rem] text-[#D1D1D6]">
                    Token decimals
                  </p>
                  <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
                    4
                  </p>
                </section>
                {/* Version */}
                <section className="flex justify-between items-center">
                  <p className="text-sm tracking-[-0.00875rem] text-[#D1D1D6]">
                    Version
                  </p>
                  <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
                    Inj Token
                  </p>
                </section>
              </div>
            </div>
          </div>
          {/* Burn Amount */}
          <div className="flex flex-col gap-[0.62rem]">
            <CustomInput
              id="burnAmount"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Burn Amount"
              type="number"
              placeholder="0"
              value={burnAmount}
              onChange={(e) => {
                setBurnAmount?.(e.target.value);
              }}
              isRequired={false}
            />
            <span className="text-xs font-medium text-[#FEF1A7] md:text-sm">
              Balance: 1000000000
            </span>
          </div>
          <div className="flex gap-2 mt-10 md:items-center justify-end">
            <button className="text-[#A0A0AB] text-lg leading-10 tracking-tight w-[7.375rem] text-center rounded-[0.625rem] md:text-2xl">
              Cancel
            </button>
            <button
              disabled={burnAmount === 0 || !burnAmount}
              onClick={(e: any) => {
                e.preventDefault();
                window.scrollTo(0, 0);
                // setIsModalShowing?.(true);
                toggleModal?.();
                if (typeof window != "undefined" && window.document) {
                  document.body.style.overflow = "hidden";
                }
              }}
              type="submit"
              className={`bg-white leading-10 text-lg disabled:bg-[#26272B] tracking-tight hover:bg-white/70 w-48 md:w-[14.25rem] text-center rounded-[6.25rem] md:text-2xl p-[0.6rem] text-black disabled:text-[#A0A0AB]`}
            >
              Burn token
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
