export default function Why() {
  return (
    <section className="px-5 md:px-20 xl:px-28 text-white bg-[#26272B] pt-24 pb-28">
      <span className="why-gradient-text font-aspekta-medium uppercase border border-[#59D3FF] rounded-[31.25rem] p-[0.625rem]">
        WHY?
      </span>
      <h1 className="text-3xl md:text-5xl mb-12 md:mb-16 mt-[1.72rem] font-aspekta-light-250">
        Why use KazeBot?
      </h1>
      <hr className="border-[#51525C]" />
      <section className="mt-[4.19rem] grid md:grid-cols-3 gap-y-16 gap-10 xl:gap-x-40">
        <div className="">
          <h1 className="text-6xl font-aspekta-bold-750 tracking-[-0.12rem] lg:text-8xl mb-4 lg:mb-[2.06rem]">
            68%
          </h1>
          <p className="tracking-[-0.03rem] font-aspekta-light-250 text-xl lg:text-2xl">
            Time Saved buying on DEX
          </p>
        </div>
        <div className="">
          <h1 className="text-6xl font-aspekta-bold-750 tracking-[-0.12rem] lg:text-8xl mb-4 lg:mb-[2.06rem]">
            #1
          </h1>
          <p className="tracking-[-0.03rem] font-aspekta-light-250 text-xl lg:text-2xl">
            Top telegram bot on Injective
          </p>
        </div>
        <div className="">
          <h1 className="text-6xl font-aspekta-bold-750 tracking-[-0.12rem] lg:text-8xl mb-4 lg:mb-[2.06rem]">
            3100+
          </h1>
          <p className="tracking-[-0.03rem] font-aspekta-light-250 text-xl lg:text-2xl">
            Active Users
          </p>
        </div>
      </section>
    </section>
  );
}
