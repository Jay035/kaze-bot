import { GlobalContext } from "@/context/Context";
import GetFileSize from "@/hooks/getFileSize";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

interface CustomFileDropboxProps {
  selectedFile: File | null;
  inputRef: any;
  fileType: string;
  // imageDimensionSupported: boolean;
  onFileSelected: (files: File | null) => void;
  onButtonClick?: () => void;
  removeFile: (files: any) => void;
}

const CustomFileDropbox: React.FC<CustomFileDropboxProps> = ({
  onFileSelected,
  selectedFile,
  inputRef,
  removeFile,
  // imageDimensionSupported,
  // onButtonClick,
  fileType,
}) => {
  const { onButtonClick } = GlobalContext();
  const pathname = usePathname();
  const fileSize: number | null = selectedFile && selectedFile?.size / 10000;
  const [isDragOver, setIsDragOver] = useState(false);
  const [imageDimensionSupported, setImageDimensionSupported] = useState(false);

  const checkFileSize = (file: File | null) => {
    if (file) {
      const img = document.createElement("img");

      // const selectedImage = file;

      const objectURL = URL.createObjectURL(file);

      img.onload = function handleLoad() {
        console.log(`Width: ${img.width}, Height: ${img.height}`);

        if (img.width > 400 || img.height > 400) {
          alert("The image's width or height is more than 400px");
          setImageDimensionSupported(false);
        }
        setImageDimensionSupported(true);
        URL.revokeObjectURL(objectURL);
      };
      img.src = objectURL;
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);

    const file = event.dataTransfer.files[0];
    if (pathname === "/tools/token/airdrop") {
      if (
        file.type === "text/csv" ||
        file.type === "application/vnd.ms-excel"
      ) {
        console.log("csv file has been selected");
        onFileSelected(file);
      } else {
        alert("Please drop a CSV file.");
      }
    } else {
      checkFileSize(file);
      if (imageDimensionSupported) {
        onFileSelected(file);
      }
      // if (file) {
      //   const img = document.createElement("img");

      //   const selectedImage = file;

      //   const objectURL = URL.createObjectURL(selectedImage);

      //   img.onload = function handleLoad() {
      //     console.log(`Width: ${img.width}, Height: ${img.height}`);

      //     if (img.width < 100 || img.height < 100) {
      //       console.log("The image's width or height is less than 100px");
      //     }

      //     URL.revokeObjectURL(objectURL);
      //   };

      //   img.src = objectURL;

      //   // document.body.appendChild(img);
      // }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    if (event.target.files && event?.target?.files.length > 0) {
      checkFileSize(event.target.files[0]);
      if (imageDimensionSupported) {
        onFileSelected(event.target.files[0]);
      }
    }
  };

  return (
    <div
      className={`border-2 border-dashed border-[#59D3FF] py-[0.875rem] px-[1.1875rem] rounded-lg 
      `}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <input
        id="fileInput"
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleFileInputChange}
        accept={fileType}
      />
      {!selectedFile ? (
        <span
          className="group-hover:underline cursor-pointer text-[#69FF77]"
          onClick={(event) => {
            event.stopPropagation();
            onButtonClick?.(inputRef);
          }}
        >
          Click to upload file{" "}
          <span className="text-[#D1D1D6]"> or drag and drop</span>
        </span>
      ) : (
        <div className="flex justify-between items-center gap-2">
          <p className="truncate text-[#69FF77] text-xs">
            {selectedFile?.name}{" "}
            <span className="text-[#D1D1D6] ml-2">
              ({fileSize?.toFixed(0)} Kb)
            </span>
          </p>
          <button onClick={removeFile}>
            <Image
              width="0"
              height="0"
              className="w-5 h-5 md:w-6 md:h-6"
              src="/delete.svg"
              alt="delete icon"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomFileDropbox;
