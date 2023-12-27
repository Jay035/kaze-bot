type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="pb-10 md:pr-[2.75rem] font-aspekta-light-250 md:pb-0 border-t border-[#A0A0AB] text-white flex justify-between flex-col md:flex-row items-center">
      <div className="flex items-center gap-8 md:gap-0 py-[2.16rem] md:py-0">
        <a
          href="https://t.co/MgFDBrP3is"
          className="md:p-6 lg:py-[2.16rem] lg:px-[2.16rem]"
        >
          TELEGRAM
        </a>
        <a
          href="https://twitter.com/Kazebot_INJ"
          className="py-6 lg:py-[2.16rem] md:border-x md:px-[2.62rem]"
        >
          TWITTER
        </a>
      </div>
      <p className="">© 2023 KAZEBOT – ALL RIGHTS RESERVED</p>
    </footer>
  );
}
