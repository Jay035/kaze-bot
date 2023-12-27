import Image from "next/image";

type Props = {
  logo: string;
  title: string;
  subtext: string;
};

const FeaturesData = [
  {
    logo: "/assets/automatic-buy-svg.svg",
    title: "Automatic Buy",
    subtext:
      "Swiftly purchase any desired coin on Injective when you paste a token address.",
  },
  {
    logo: "/assets/referrals-svg.svg",
    title: "Referrals",
    subtext:
      "Refer your friends and earn 10% of their fees at all time, forever!",
  },
  {
    logo: "/assets/PNL-svg.svg",
    title: "PNL Overview",
    subtext:
      "Easily monitor your positions, market cap, profit after fees, liquidity, token balance, and recent price changes.",
  },
  {
    logo: "/assets/$KBT-svg.svg",
    title: "$KBT buy and burn",
    subtext:
      "60% of all trade fees are allocated to the purchase & burning of $KBT.",
  },
];
export default function Features() {
  return (
    <section className="px-5 md:px-20 xl:px-28 2xl:px-44 pt-24 pb-40 text-white">
      <span
        data-aos="fade-up"
        className="features-gradient-text 2xl:text-xl uppercase border border-[#59D3FF] rounded-[31.25rem] p-[0.625rem] font-aspekta-medium"
      >
        KazeBot’s Features
      </span>
      <h1
        data-aos="fade-up"
        className="mt-[1.72rem] text-3xl lg:text-5xl 2xl:text-6xl font-aspekta-light-250"
      >
        Seamless -fast trading at your fingertips with our free-to-use Telegram
        bot.
      </h1>
      <section className="grid gap-12 2xl:gap-16 md:grid-cols-2 lg:grid-cols-4 mt-[4.31rem]">
        {FeaturesData?.map((item: Props, index) => (
          <div data-aos="fade-up" key={index} className="flex flex-col">
            <Image
              src={item?.logo}
              width={56}
              height={56}
              className="w-14 h-14 2xl:w-20 2xl:h-20"
              alt="icon"
            />
            <h2 className="font-aspekta-medium mt-9 mb-4 tracking-[-0.04rem] text-xl 2xl:text-3xl">
              {item?.title}
            </h2>
            <p className="font-aspekta-light-250 text-[#D0D5DD] text-lg 2xl:text-2xl">
              {item?.subtext}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
}
