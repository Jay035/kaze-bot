"use client";
import { useRouter } from "next/navigation";

type Props = {
  className: string;
};

export default function RedirectButton({ className }: Props) {
  const router = useRouter();
  return (
    <i
      onClick={() => router.back()}
      className={`ri-close-line ${className}`}
    ></i>
  );
}
