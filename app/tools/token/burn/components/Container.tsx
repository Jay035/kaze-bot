"use client";
import CustomInput from "@/components/CustomInput";
import { GlobalContext } from "@/context/Context";
import Image from "next/image";
import { useState } from "react";

type Props = {};

export default function Container({}: Props) {
  const { isModalShowing, setIsModalShowing } = GlobalContext();
  const [mintAddress, setMintAddress] = useState<string>("");
  const [burnAmount, setBurnAmount] = useState<number>(0);
  const [addressVerified, setAddressVerified] = useState<boolean>(false);

  const verifyAddress = () => {
    setAddressVerified(true);
  };

  return (
    <form className="flex flex-col gap-8 mb-28 lg:mb-32">
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
                setIsModalShowing?.(true);
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
