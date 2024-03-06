"use client";
import CustomFileDropbox from "@/components/CustomFileDropbox";
import CustomInput from "@/components/CustomInput";
import Modal from "@/components/Modal";
import { GlobalContext } from "@/context/Context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

type Props = {};

export default function Container({}: Props) {
  const { toggleModal, onButtonClick } = GlobalContext();
  const [mintAddress, setMintAddress] = useState<string>("");
  const [airdropCSV, setAirdropCSV] = useState<File | null>();
  const [addressVerified, setAddressVerified] = useState<boolean>(false);
  const [sendingAirdrop, setSendingAirdrop] = useState(false);
  const [isAirdropSendSuccessful, setIsAirdropSendSuccessful] = useState(false);
  const router = useRouter();
  const inputRef = useRef<any>(null);

  const handleFileSelected = (file: File | null) => {
    setAirdropCSV?.(file);
    console.log(file);
  };

  const removeFile = () => {
    setAirdropCSV?.(null);
  };

  // const onButtonClick = () => {
  //   inputRef?.current?.click();
  // };

  const verifyAddress = () => {
    setAddressVerified(true);
  };

  const sendAirdrop = () => {
    setSendingAirdrop(true);
    setTimeout(() => {
      setIsAirdropSendSuccessful(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-8 mb-28 lg:mb-32">
      <Modal isMintSuccessful={isAirdropSendSuccessful}>
        {!isAirdropSendSuccessful ? (
          <>
            {sendingAirdrop ? (
              <div className="bg-[#18181B] text-center relative text-white w-full rounded-2xl p-6 xl:p-8 pt-[4.75rem] pb-14 md:w-full h-fit max-h-[90vh] overflow-y-auto max-w-[45rem]">
                <h1 className="tracking-[-0.015rem] font-medium text-xl md:text-2xl">
                  Sending airdrop in progress...
                </h1>
                <div className="bg-[#3F3F46] w-[21rem] mx-auto mt-[0.94rem] p-[0.05rem] rounded-[0.625rem]">
                  <div className="bg-[#26272B] p-4 rounded-[0.625rem] flex gap-[0.88rem]">
                    <div className="bg-[#FEF1A7] rounded-[1.75rem] w-8 h-8 p-1">
                      <Image
                        src="/coins-swap-01.svg"
                        alt="airdrop icon"
                        width="0"
                        height="0"
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <h2 className="text-sm text-left font-medium">
                        Distributing Airdrop
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
              <div className="bg-[#18181B] text-center text-white w-full rounded-2xl p-6 xl:p-8 pt-10 pb-12 md:w-full h-fit max-h-[90vh] overflow-y-auto max-w-[45rem]">
                <h1 className="tracking-[-0.015rem] font-medium text-xl md:text-2xl">
                  Send Airdrop
                </h1>

                <i
                  onClick={() => {
                    toggleModal?.();
                    // setIsModalShowing?.(false);
                    document.body.style.overflow = "unset";
                  }}
                  className="ri-close-line text-white absolute top-[1.56rem] right-[2.75rem] cursor-pointer text-2xl md:text-3xl font-medium"
                ></i>
                <p className="pt-[1.5rem]">
                  Are you sure you want to send these tokens. This action is
                  permanent and cannot be reversed
                </p>
                <div className="flex gap-6 mt-10 md:items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleModal?.();
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
                      sendAirdrop();
                    }}
                    type="submit"
                    className={`bg-[#69FF77] leading-10 font-medium text-lg disabled:bg-[#69FF77]/80 tracking-[-0.0225rem] hover:bg-[#69FF77]/80 w-40 text-center rounded-[6.25rem] p-[0.6rem] text-black`}
                  >
                    Proceed to send
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
              Airdrop sent successfully
            </h1>
            <button
              onClick={() => {
                document.body.style.overflow = "unset";
                router.push("/tools");
                toggleModal?.();
              }}
              className="bg-[#69FF77] text-black text-lg font-bold p-[0.63rem] leading-10 rounded-lg w-full mt-[2.63rem]"
            >
              Continue
            </button>
          </div>
        )}
      </Modal>
      <div className="flex flex-col gap-8">
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
          disabled={mintAddress === ""}
          className="bg-[#69FF77] w-[4.7rem] border-[#51525C] border disabled:bg-[#69FF77]/50 tracking-[-0.00875rem] hover:bg-[#69FF77]/80 text-center rounded-[0.625rem] text-sm font-semibold py-[0.9rem] px-5 text-black"
        >
          Load
        </button>
      </div>
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
          <div className="tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
            <p>
              Upload CSV<span className="text-[#F04438]">*</span>
            </p>
            <CustomFileDropbox
              fileType=".csv"
              inputRef={inputRef}
              selectedFile={airdropCSV!}
              removeFile={removeFile}
              onFileSelected={handleFileSelected}
              // onButtonClick={onButtonClick}
            />

            <p className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              Only CSV files are allowed
            </p>
          </div>

          <div className="flex gap-2 mt-10 md:items-center justify-end">
            <button className="text-[#A0A0AB] text-lg leading-10 tracking-tight w-[7.375rem] text-center rounded-[0.625rem] md:text-2xl">
              Cancel
            </button>
            <button
              disabled={airdropCSV === null || !airdropCSV}
              onClick={(e: any) => {
                e.preventDefault();
                window.scrollTo(0, 0);
                // setIsModalShowing?.(true);
                toggleModal?.();
                if (typeof window != "undefined" && window.document) {
                  document.body.style.overflow = "hidden";
                }
              }}
              // type="submit"
              className={`bg-white leading-10 text-lg disabled:bg-[#26272B] tracking-tight hover:bg-white/70 w-48 md:w-[14.25rem] text-center rounded-[6.25rem] md:text-2xl p-[0.6rem] text-black disabled:text-[#A0A0AB]`}
            >
              Send airdrop
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
