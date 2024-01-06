import RedirectButton from "@/components/RedirectButton";
import Container from "./components/Container";

type Props = {};

export default function ManageToken({}: Props) {
  return (
    <main className="min-h-screen text-[#E4E4E7] px-8 md:px-10 xl:px-28">
      <section className="flex items-center justify-between mb-8 gap-4 mt-28 lg:mt-32">
        <h1 className="tracking-tight text-[#F4F4F5] text-2xl lg:text-[2rem] lg:leading-[1.125rem]">
          Manage token
        </h1>

        <RedirectButton className="text-white cursor-pointer text-2xl md:text-3xl font-medium" />
      </section>
      <Container />
    </main>
  );
}
