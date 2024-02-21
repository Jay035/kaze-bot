import InputContainer from "./components/InputContainer";
import RedirectButton from "@/components/RedirectButton";

type Props = {};

export default function CreateToken({}: Props) {
  return (
    <main className="min-h-screen text-[#E4E4E7)] px-8 md:px-10 xl:px-28 my-28 md:my-32">
      <section className="flex items-start justify-between gap-4">
        <div className="mb-8">
          <h1 className="tracking-tight mb-[0.8rem] text-[#F4F4F5] text-2xl lg:text-[2rem] lg:leading-[1.125rem]">
            Token Details
          </h1>
          <p className="text-[0.8125rem] tracking-[-0.00813rem] text-[#D1D1D6]">
            <span className="text-[#F04438]">(*) </span>is required field
          </p>
        </div>
        <RedirectButton className="text-white cursor-pointer text-2xl md:text-3xl font-medium" />
      </section>
      <InputContainer />
    </main>
  );
}
