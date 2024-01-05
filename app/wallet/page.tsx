import Image from "next/image";

type Props = {};

export default function Wallet({}: Props) {
  return (
    <main className="min-h-screen mt-6 sm:mt-0 p-16 md:p-40 flex justify-center items-center">
      <div className="w-full max-w-[36rem] h-[25rem] md:h-[30rem] bg-gradient-to-t from-[#212124] to-[#3F3F46] p-0.5 rounded-3xl">
        <div className="relative w-full h-full pt-[1.56rem] pb-[1.87rem] px-9 text-center text-white bg-[#18181B] rounded-3xl">
          <h1 className="text-xl md:text-2xl font-medium">Connect wallet</h1>
          <i className="ri-close-line cursor-pointer text-2xl absolute right-10 sm:right-12 top-6 font-medium"></i>
          <div className="w-full mt-[2.13rem] bg-gradient-to-t from-[#212124] to-[#3F3F46] p-0.5 rounded-3xl">
            <div className="w-full py-[1.56rem] bg-[#212124] px-6 md:px-9 text-center items-center gap-[0.9rem] pt-16 md:pt-20 pb-[1.94rem] flex justify-center flex-col text-white rounded-3xl">
              <Image
                width="0"
                height="0"
                className="w-12 h-12 md:w-[5.5rem] md:h-[5.5rem]"
                src="/Keplr_icon_ver.svg"
                alt="keplr logo"
              />
              <span className="font-semibold text-2xl md:text-[2.5rem] leading-normal">
                Keplr
              </span>
              <button className="mt-[1.87rem] bg-[#69FF77] md:text-lg rounded-lg text-black w-full py-[0.63rem] text-sm font-bold">
                Click here to connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
