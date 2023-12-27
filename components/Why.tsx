type Props = {};

export default function Why({}: Props) {
  return (
    <section className="px-5 md:px-20 xl:px-28 2xl:px-44 text-white bg-[#26272B] pt-24 pb-28">
      <span
        data-aos="fade-up"
        className="why-gradient-text font-aspekta-medium 2xl:text-xl uppercase border border-[#59D3FF] rounded-[31.25rem] p-[0.625rem]"
      >
        Why you should use kazebot?
      </span>
      <h1
        data-aos="fade-left"
        className="text-3xl md:text-5xl 2xl:text-6xl mb-12 md:mb-16 mt-[1.72rem] font-aspekta-light-250"
      >
        <span>Swap & Snipe. Safely.</span>
        <br />
        <span>
          Buy, Sell, Manage your{" "}
          <span className="text-[#FEF1A7] font-aspekta-medium">Injective</span>{" "}
          trades easily.
        </span>
      </h1>
      <hr className="border-[#51525C]" />
      <section
        data-aos="fade-in"
        className="mt-[4.19rem] grid md:grid-cols-3 gap-y-16 gap-10 xl:gap-x-40"
      >
        <div className="">
          <h1
            data-aos="fade-up"
            className="text-6xl font-aspekta-bold-750 tracking-[-0.12rem] lg:text-8xl mb-4 lg:mb-[2.06rem]"
          >
            68%
          </h1>
          <p
            data-aos="fade-up"
            className="tracking-[-0.03rem] font-aspekta-light-250 text-xl lg:text-2xl 2xl:text-3xl"
          >
            Time Saved buying on DEX
          </p>
        </div>
        <div className="">
          <h1
            data-aos="fade-up"
            className="text-6xl font-aspekta-bold-750 tracking-[-0.12rem] lg:text-8xl mb-4 lg:mb-[2.06rem]"
          >
            #1
          </h1>
          <p
            data-aos="fade-up"
            className="tracking-[-0.03rem] font-aspekta-light-250 text-xl lg:text-2xl 2xl:text-3xl"
          >
            Top telegram bot on Injective
          </p>
        </div>
        <div className="">
          <h1
            data-aos="fade-up"
            className="text-6xl font-aspekta-bold-750 tracking-[-0.12rem] lg:text-8xl mb-4 lg:mb-[2.06rem]"
          >
            6100+
          </h1>
          <p
            data-aos="fade-up"
            className="tracking-[-0.03rem] font-aspekta-light-250 text-xl lg:text-2xl 2xl:text-3xl"
          >
            Active Users
          </p>
        </div>
      </section>
    </section>
  );
}
