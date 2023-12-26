import telegramLogo from "../assets/telegram.svg";

export default function Trade() {
  return (
    <section className="text-white px-5 md:px-20 xl:px-28 pt-32 pb-[4.7rem] flex flex-col items-center text-center">
      <h1 data-aos="fade-up" className="text-3xl md:text-5xl font-aspekta-light-250">
        All Fees Go To Buying $KBT
      </h1>
      <p data-aos="fade-up" className="mt-8 lg:text-2xl tracking-[-0.03rem] max-w-[58rem] mb-8 lg:mb-16 font-aspekta-light-250">
        All trade fees are entirely allocated to the purchase of $KBT, while an
        immediate 10% of the fees result in the burning of $KBT.
      </p>
      <a
      data-aos="fade-up"
        href="https://t.me/KazeOnInjBot?start=861251805"
        className="mt-12 gap-[0.625rem] w-[19rem] justify-center lg:text-2xl tracking-[-0.03rem] font-aspekta-medium text-[#131313] font-bold flex items-center h-[4.4rem] p-[0.6rem] rounded-[6.25rem] bg-[#69FF77]"
      >
        <img src={telegramLogo} alt="telegram logo" />
        Trade Now
      </a>
    </section>
  );
}
