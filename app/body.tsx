"use client";
import AOS from "aos";
import { useEffect } from "react";

type Props = {};

export default function BodyComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1100,
      easing: "ease-in",
    });
  }, []);
  return <div className="font-aspekta bg-[#010101] overflow-x-hidden relative">{children}</div>;
}