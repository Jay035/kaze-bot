"use client";
import { useRouter } from "next/navigation";

type Props = {
  route: string;
};

export default function Redirect({}) {
  const router = useRouter();
  return router.back();
}
