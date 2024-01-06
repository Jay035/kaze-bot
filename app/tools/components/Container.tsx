"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {};

const toolsData = [
  {
    icon: "/plus.svg",
    text: "Create Token",
    subText: "Create an Injective Token with Extensions",
    route: "/tools/token/create",
  },
  {
    icon: "/coins-stacked-04.svg",
    text: "Manage Token",
    subText: "Manage Token Authority & Updates",
    route: "/tools/token/manage",
  },
  {
    icon: "/flame.svg",
    text: "Token Burn",
    subText: "Burn Tokens",
    route: "/tools/token/burn",
  },
  {
    icon: "/ticket-02.svg",
    text: "Token Mint",
    subText: "Mint More Tokens for an Existing Token",
    route: "/tools/token/mint",
  },
  {
    icon: "/coins-swap-01.svg",
    text: "Token Airdrop",
    subText:
      "Mass Airdrop Tokens to other token holders or through manual/csv entry.",
    route: "/tools/token/airdrop",
  },
];

export default function Container({}: Props) {
  const router = useRouter();
  return (
    <section className="flex flex-col gap-6 mt-[2.13rem] mb-20">
      {toolsData?.map((tool, index) => (
        <div
          key={index}
          data-aos="fade-in"
          className="w-full bg-[#3F3F46] text-white p-[0.07rem] rounded-3xl"
        >
          <div
            onClick={() => {
              router.push(tool?.route);
              window.scrollTo(0, 0);
            }}
            className="w-full cursor-pointer py-6 md:pt-[1.94rem] md:pb-[2.7rem] bg-[#212124] px-3 md:px-[2.19rem] flex items-center gap-4 rounded-3xl"
          >
            <div className="bg-[#FEF1A7] flex justify-center items-center p-5 rounded-full">
              <Image
                width="0"
                height="0"
                className="w-full h-full"
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
