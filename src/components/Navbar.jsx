import { useState } from "react";
import navlogo from "../assets/logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <nav className="absolute overflow-hidden top-0 left-0 z-10 flex justify-between items-center tracking-tight w-full gap-x-12 py-4 md:py-8 pr-5 md:pr-10 xl:px-28">
        <section className="pl-5 md:pl-10 xl:pl-0">
          <a href="/" className="flex items-center gap-[0.38rem]">
            <img
              src={navlogo}
              alt="logo"
              loading="lazy"
              className="w-[2.8rem]"
            />
          </a>
        </section>
        <section
          className={`absolute md:relative top-0 z-[99999999] flex flex-col md:flex-row gap-5 justify-center items-center transition-all ${
            menuOpen
              ? "bg-[#1e1e1e] left-0 w-full h-screen"
              : "-left-full md:left-0"
          }`}
        >
          <a
            href="#"
            className="flex items-center justify-center text-sm sm:text-base lg:text-2xl tracking-[-0.03rem] border border-white bg-transparent text-center text-white p-[0.6rem] rounded-[6.25rem] w-36 lg:w-56 hover:bg-transparent hover:text-white hover:border-white"
          >
            Leaderboard
          </a>
          <a
            href="https://kazebotinj.gitbook.io/kazebot-documentation/"
            className="flex items-center justify-center text-sm sm:text-base lg:text-2xl tracking-[-0.03rem] border bg-white text-center text-[#131313] font-aspekta-bold p-[0.6rem] rounded-[6.25rem] w-36 lg:w-56 hover:bg-transparent hover:text-white hover:border-white"
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
    </header>
  );
}
