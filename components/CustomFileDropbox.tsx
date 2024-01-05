import Image from "next/image";
import React, { useRef, useState } from "react";

interface CustomFileDropboxProps {
  selectedFile: File | undefined;
  inputRef: any;
  onFileSelected: (files: File | undefined) => void;
  onButtonClick: (files: any) => void;
  removeFile: (files: any) => void;
}

const CustomFileDropbox: React.FC<CustomFileDropboxProps> = ({
  onFileSelected,
  selectedFile,
  inputRef,
  removeFile,
  onButtonClick,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);

    const file = event.dataTransfer.files[0];
    onFileSelected(file);
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
    if (event.target.files && event?.target?.files.length > 0) {
      onFileSelected(event.target.files[0]);
      console.log(event.target.files[0]?.size / 1000000)
    }
    // const file =  event.target.files[0];
    // onFileSelected(file!);
  };

  // Fetch the files
  // const droppedFiles = Array.from(event.dataTransfer.files);
  // setFiles(droppedFiles);

  // // Use FileReader to read file content
  // droppedFiles.forEach((file) => {
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     console.log(reader.result);
  //   };

  //   reader.onerror = () => {
  //     console.error('There was an issue reading the file.');
  //   };

  //   reader.readAsDataURL(file);
  //   return reader;
  // });
  // };

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
        // onClick={(event) => {
        //   event.stopPropagation();
        // }}
        onChange={handleFileInputChange}
        accept="image/*"
      />
      {!selectedFile ? (
        <label
          htmlFor="fileInput"
          className="cursor-pointer group text-[#D1D1D6]"
        >
          <span
            className="group-hover:underline text-[#69FF77]"
            onClick={onButtonClick}
          >
            Click to upload file
          </span>{" "}
          or drag and drop.
        </label>
      ) : (
        <div className="flex justify-between items-center gap-2">
          <p className="truncate">{selectedFile.name}</p>
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
