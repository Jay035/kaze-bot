import Image from "next/image";

type Props = {};

export default function Trade({}: Props) {
  return (
    <section className="text-white px-5 md:px-20 xl:px-28 pt-32 pb-[4.7rem] flex flex-col items-center text-center">
      <h1
        data-aos="fade-up"
        className="text-3xl md:text-5xl 2xl:text-6xl font-aspekta-light-250"
      >
        Trade. Refer. Earn with KazeBot
      </h1>
      <p
        data-aos="fade-up"
        className="mt-8 lg:text-2xl 2xl:text-3xl tracking-[-0.03rem] max-w-[58rem] mb-8 lg:mb-16 font-aspekta-light-250"
      >
        KazeBot allocates fees as follows: 60% for buyback and burn, 10% for the
        team, 20% for the treasury, and 10% for referrals.
      </p>
      <a
        data-aos="fade-up"
        href="https://t.me/KazeOnInjBot?start=861251805"
        className="mt-12 gap-[0.625rem] w-44 lg:w-[19rem] justify-center lg:text-2xl tracking-[-0.03rem] font-aspekta-medium text-[#131313] font-bold flex items-center lg:h-[4.4rem] p-[0.6rem] rounded-[6.25rem] bg-[#69FF77]"
      >
        <Image src="/assets/telegram.svg" width={24} height={24} alt="telegram logo" />
        Trade Now
      </a>
    </section>
  );
}
