"use client";
import Image from "next/image";
import Container from "./components/Container";
import { useRouter } from "next/navigation";

type Props = {};

export default function ToolsPage({}: Props) {
  const router = useRouter();
  return (
    <main className="min-h-screen px-8 md:px-10 xl:px-28 my-28 md:my-32">
      <div className="text-white flex items-center gap-4">
        <Image
          onClick={() => {
            router.push("/");
          }}
          width="0"
          height="0"
          className="w-10 h-10 md:w-12 md:h-12 cursor-pointer"
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
