import Image from "next/image";
import React from "react";

type Props = {};
const toolsData = [
  {
    icon: "/plus.svg",
    text: "Create Token",
    subText: "Create an Injective Token with Extensions",
  },
  {
    icon: "/coins-stacked-04.svg",
    text: "Manage Token",
    subText: "Manage Token Authority & Updates",
  },
  {
    icon: "/flame.svg",
    text: "Token Burn",
    subText: "Burn Tokens",
  },
  {
    icon: "/ticket-02.svg",
    text: "Token Mint",
    subText: "Mint More Tokens for an Existing Token",
  },
  {
    icon: "/coins-swap-01.svg",
    text: "Token Airdrop",
    subText:
      "Mass Airdrop Tokens to other token holders or through manual/csv entry.",
  },
];

export default function Container({}: Props) {
  return (
    <section className="flex flex-col gap-6 mt-[2.13rem] mb-20">
      {toolsData?.map((tool, index) => (
        <div
          key={index}
          data-aos="fade-in"
          className="w-full bg-gradient-to-t text-white from-[#212124] to-[#3F3F46] p-0.5 rounded-3xl"
        >
          <div className="w-full py-4 md:py-[1.94rem] bg-[#212124] px-3 md:px-[2.19rem] flex items-center gap-4 rounded-3xl">
            <div className="bg-[#FEF1A7] flex justify-center items-center h-10 w-12 md:w-14 md:h-12 rounded-full">
              <Image
                width="0"
                height="0"
                className="w-7 h-7 md:w-[2.6rem] md:h-[2.6rem]"
                src={tool?.icon}
                alt="plus icon"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="uppercase font-medium text-[#F4F4F5]">
                {tool?.text}
              </h1>
              <p className="text-[#E4E4E7] text-sm md:text-lg">
                {tool?.subText}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
