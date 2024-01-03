"use client";
import { useMemo } from "react";

type Props = {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
};

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: Props) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const range = (start: any, end: any) => {
      let length = end - start + 1;
      /*
            Create an array of certain length and set the elements within it from
          start value to end value.
        */
      return Array.from({ length }, (_, idx) => idx + start);
    };
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
