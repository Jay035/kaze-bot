"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {};

export default function Navbar({}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      data-aos="fade-in"
      className="absolute top-0 left-0 z-30 flex justify-between items-center tracking-tight w-full gap-x-12 py-4 md:py-8 pr-5 md:pr-10 xl:px-28"
    >
      <section className="pl-5 md:pl-10 xl:pl-0">
        <Link href="/" className="flex items-center gap-[0.38rem]">
          <Image placeholder="blur" blurDataURL={"/assets/logo.svg"} className="w-11 h-auto" width="0" height="0" src="/assets/logo.svg" alt="logo" />
        </Link>
      </section>
      <section
        className={` bg-[#1e1e1e] md:relative absolute w-full h-screen z-[9999999] md:bg-transparent md:w-fit md:h-fit flex flex-col md:flex-row gap-5 justify-center items-center transition-all ${
          menuOpen ? "left-0 top-0" : "-left-full md:left-0"
        }`}
      >
        <Link
          href="/leaderboard"
          onClick={() => setMenuOpen((prevState) => !prevState)}
          className="flex items-center justify-center text-sm sm:text-base lg:text-xl tracking-[-0.03rem] border border-white bg-transparent text-center font-aspekta-light-350 text-white p-[0.6rem] rounded-[6.25rem] w-36 lg:w-48 hover:bg-transparent hover:text-white hover:border-white"
        >
          Leaderboard
        </Link>
        <a
          href="https://kazebotinj.gitbook.io/kaze-bot-documentation/"
          className="flex items-center justify-center text-sm sm:text-base lg:text-xl tracking-[-0.03rem] border bg-white text-center text-[#131313] font-aspekta-light-350 p-[0.6rem] rounded-[6.25rem] w-36 lg:w-48 hover:bg-transparent hover:text-white hover:border-white"
        >
          Documentation
        </a>
      </section>
      {/* hamburger / Menu Icon */}
      <div
        className="z-[99999999] md:hidden flex flex-col gap-1 items-center cursor-pointer xl:hidden"
        onClick={(e) => {
          e.preventDefault();
          setMenuOpen((prevState) => !prevState);
        }}
      >
        <span
          className={`w-[1.6rem] h-[3px] bg-[#D1D1D6] block rounded-lg transition-all duration-150 delay-75 ${
            menuOpen ? `rotate-[45deg] ` : ``
          }`}
        ></span>
        <span
          className={`w-[1.6rem] h-[3px] bg-[#D1D1D6] block rounded-lg transition-all duration-150 ${
            menuOpen ? `hidden` : ``
          }`}
        ></span>
        <span
          className={`w-[1.6rem] h-[3px] bg-[#D1D1D6] block rounded-lg transition-all duration-150 delay-75 ${
            menuOpen ? `rotate-[495deg] -translate-y-1.5 ` : ``
          }`}
        ></span>
      </div>
    </nav>
  );
}
