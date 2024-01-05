import React, { useRef, useState } from "react";

interface CustomFileDropboxProps {
  selectedFile: File | undefined;
  inputRef: any;
  onFileSelected: (files: File | undefined) => void;
  onButtonClick: (files: any) => void;
}

const CustomFileDropbox: React.FC<CustomFileDropboxProps> = ({
  onFileSelected,
  selectedFile,
  inputRef,
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
    const file = event.target.files && event.target.files[0];
    onFileSelected(file!);
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
        accept="image/*" // You can change this to accept other file types
      />
      {!selectedFile && (
        <label htmlFor="fileInput" className="cursor-pointer group text-[#D1D1D6]">
          <span
            className="group-hover:underline text-[#69FF77]"
            onClick={onButtonClick}
          >
            Click to upload file
          </span>{" "}
          or drag and drop.
        </label>
      )}
      {selectedFile && <p className="truncate">{selectedFile.name}</p>}
    </div>
  );
};

export default CustomFileDropbox;
