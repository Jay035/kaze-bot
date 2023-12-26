import videoFile from "../assets/hero-video.mp4";
import telegramLogo from "../assets/telegram.svg";

export function HeroSection() {
  return (
    <section
      data-aos="fade-in"
      className="h-screen lg:h-[120vh] w-full relative overflow-hidden z-0"
    >
      <div className="h-screen lg:h-[119vh] video-container overflow-hidden">
        <video
          loop
          className=""
          autoPlay
          muted
        >
          <source src={videoFile} type="video/mp4" />
        </video>
      </div>
      <div className="px-5 bg-[#010101]/75 h-screen lg:h-[120vh] w-full absolute top-1/2 z-0 -translate-y-1/2 left-[49.99%] -translate-x-1/2 ">
        <div className="relative top-1/2 -translate-y-1/2 max-w-[36rem] lg:max-w-[53rem] mx-auto">
          <span className="hero-gradient-text text-sm sm:text-base font-aspekta-light-350 uppercase border border-[#CAFF59] rounded-[31.25rem] p-[0.625rem]">
            TELEGRAM TRADING BOT
          </span>
          <h1 className="text-4xl text-white font-aspekta-light-250 lg:text-5xl xl:text-[4rem] xl:leading-[4rem] mt-8">
            Welcome to <span className="font-aspekta-medium">KazeBot</span> -
            the fastest and most convenient way to trade and earn on{" "}
            <span className="text-[#FEF1A7] font-aspekta-medium">
              Injective.
            </span>
          </h1>
          <a
            href="https://t.me/KazeOnInjBot?start=861251805"
            className="mt-12 w-fit gap-[0.625rem] lg:text-2xl text-[#131313] font-aspekta-bold flex items-center p-[0.6rem] lg:p-4 rounded-[6.25rem] bg-[#69FF77] hover:bg-[#69FF77]/70"
          >
            <img src={telegramLogo} alt="telegram logo" />
            Open Telegram Bot
          </a>
        </div>
      </div>
    </section>
  );
}
