"use client";
import React from "react";
import BurnTokenModal from "@/components/Modal";
import { GlobalContext } from "@/context/Context";
import AOS from "aos";
import { useEffect } from "react";

type Props = {};

export default function BodyComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { isModalShowing } = GlobalContext();

  useEffect(() => {
    AOS.init({
      duration: 1100,
      easing: "ease-in",
    });
  }, []);
  return (
    <div className="font-aspekta bg-[#010101] overflow-x-hidden relative">
      {/* {isModalShowing === true && <BurnTokenModal />} */}
      {children}
    </div>
  );
}
