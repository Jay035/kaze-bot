import RedirectButton from "@/components/RedirectButton";
import Container from "./components/Container";

type Props = {};

export default function MintToken({}: Props) {
  return (
    <main className="min-h-screen h-fit text-[#E4E4E7] px-8 md:px-10 xl:px-28 my-28 md:my-32">
      <section className="flex items-center justify-between mb-8 gap-4">
        <h1 className="tracking-tight text-[#F4F4F5] text-2xl lg:text-[2rem] lg:leading-[1.125rem]">
          Token Mint
        </h1>

        <RedirectButton className="text-white cursor-pointer text-2xl md:text-3xl font-medium" />
      </section>
      <Container />
    </main>
  );
}
