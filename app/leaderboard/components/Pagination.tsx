"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "20";

  return (
    <div className="flex items-center gap-2">
      <button
        className="bg-[#98A2B3] hover:bg-[#b7c0d1] h-8 md:h-10 w-8 md:w-10 rounded-full"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/leaderboard/?page=${Number(page) - 1}&per_page=${per_page}`);
        }}
      >
         <i className="ri-arrow-left-s-line font-semibold text-black text-xl"></i>
      </button>

      <div>
        {page} 
      </div>

      <button
        className="bg-[#98A2B3] hover:bg-[#b7c0d1] h-8 md:h-10 w-8 md:w-10 rounded-full"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/leaderboard/?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
      >
        <i className="ri-arrow-right-s-line font-semibold text-black text-xl"></i>
      </button>
    </div>
  );
};
