"use client";
import { GlobalContext } from "@/context/Context";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
};

export default function Modal({children, isBurnSuccessful, isMintSuccessful, airdropSendSuccessful} : ModalProps) {
  const { showModal, toggleModal } = GlobalContext();
  const router = useRouter();

  return (
    <main
      id="modal"
      className={`${showModal ? "block" : "hidden"} bg-[#18181b]/50 backdrop-blur-[1px] w-full fixed top-0 left-0 h-full flex min-h-screen justify-center items-center z-[9999999999]`}
    >
      {/* modal */}
      <div className="bg-[#3F3F46] fixed h-auto top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-0.5 w-full max-w-[30rem] mx-8 rounded-2xl">
        <i
          onClick={() => {
            toggleModal?.();
            if (isBurnSuccessful || isMintSuccessful || airdropSendSuccessful) {
              router.push("/tools");
            }
            document.body.style.overflow = "unset";
          }}
          className="ri-close-line text-white absolute z-10 top-[1.56rem] right-[2.75rem] cursor-pointer text-2xl md:text-3xl font-medium"
        ></i>
        {children}
      </div>
    </main>
  );
}
