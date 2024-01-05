import Image from "next/image";
import Container from "./components/Container";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="min-h-screen px-8 md:px-10 xl:px-28 mt-28 lg:mt-32">
      <div className="text-white flex items-center gap-4">
        <Image
          width="0"
          height="0"
          className="w-10 h-10 md:w-12 md:h-12"
          src="/arrow-left-circle.svg"
          alt="arrow left circle"
        />
        <span className="-tracking-[0.05rem] text-2xl md:text-[2.5rem] leading-normal">
          Kaze Tools
        </span>
      </div>
      <Container />
    </main>
  );
}
