"use client";
import CustomFileDropbox from "@/components/CustomFileDropbox";
import CustomInput from "@/components/CustomInput";
import { GlobalContext } from "@/context/Context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Props = {};

export default function InputContainer({}: Props) {
  const { fileSRC, setFileSRC } = GlobalContext();
  const [tokenName, setTokenName] = useState<string>("");
  const [tokenLogo, setTokenLogo] = useState<File | null>();
  const [tokenSymbol, setTokenSymbol] = useState<string>("");
  const [tokenDescription, setTokenDescription] = useState<string>("");
  const [tokenSupply, setTokenSupply] = useState<string>("");
  const [tokenDecimals, setTokenDecimals] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const inputRef = useRef<any>(null);
  const handleFileSelected = (file: File | null) => {
    setTokenLogo?.(file);
    console.log(file);
  };

  const removeFile = () => {
    setTokenLogo?.(null);
  };

  return (
    <form className="text-[#E4E4E7] flex flex-col gap-6">
      {/* LOGO */}
      <div
        id="logo-container"
        className="tracking-[-0.01rem] flex flex-col gap-[0.62rem]"
      >
        <p>
          Logo (attach document)<span className="text-[#F04438]">*</span>
        </p>
        <CustomFileDropbox
          fileType="image/*"
          inputRef={inputRef}
          selectedFile={tokenLogo!}
          removeFile={removeFile}
          onFileSelected={handleFileSelected}
          // imageDimensionSupported={imageDimensionSupported}
          // onButtonClick={onButtonClick}
        />
        {tokenLogo && (
          // <Image
          //   id="preview-image"
          //   width="0"
          //   height="0"
          //   className="w-20 md:w-28 h-20 md:h-28"
          //   src="#"
          //   alt="file preview"
          // />
          <img id="preview-image" src="#" alt="example image" />
        )}
        <p className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
          SVG, PNG, JPG or GIF (max. 400x400px)
        </p>
      </div>
      {/* token name */}
      <CustomInput
        id="tokenName"
        className="flex flex-col gap-[0.62rem]"
        inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
        label="Token Name"
        type="text"
        placeholder="Token Name"
        value={tokenName}
        onChange={(e) => {
          setTokenName?.(e.target.value);
          setError?.("");
        }}
        isRequired={true}
      />
      {/* token symbol */}
      <CustomInput
        id="tokenSymbol"
        className="flex flex-col gap-[0.62rem]"
        inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
        label="Symbol"
        type="text"
        placeholder="Token symbol"
        value={tokenSymbol}
        onChange={(e) => {
          setTokenSymbol?.(e.target.value);
          setError?.("");
        }}
        isRequired={true}
      />
      {/* token description */}
      <label htmlFor="description" className="flex flex-col gap-[0.62rem]">
        Description
        <div className="p-[0.07rem] w-full bg-gradient-to-b from-[#51525C] to-[#414149] hover:border hover:border-[#F4F4F5] rounded-[0.625rem]">
          <textarea
            id="description"
            className="bg-[#26272B] resize-none outline-none w-full rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            placeholder="Leave a short description about your project"
            value={tokenDescription}
            onChange={(e) => {
              setTokenDescription?.(e.target.value);
              setError?.("");
            }}
            rows={4}
          ></textarea>
        </div>
      </label>
      {/* token supply */}
      <CustomInput
        id="tokenSupply"
        className="flex flex-col gap-[0.62rem]"
        inputClassName="bg-[#26272B] tracking-[-0.00875rem] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] text-[0.875rem] text-[#A0A0AB]"
        label="Supply"
        type="number"
        placeholder="1000000"
        value={tokenSupply}
        onChange={(e) => {
          setTokenSupply?.(e.target.value);
          setError?.("");
        }}
        isRequired={true}
      />
      {/* token decimals */}
      <CustomInput
        id="tokenDecimals"
        className="flex flex-col gap-[0.62rem]"
        inputClassName="bg-[#26272B] tracking-[-0.00875rem] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] text-[0.875rem] text-[#A0A0AB]"
        label="Decimals"
        type="number"
        placeholder="4"
        value={tokenDecimals}
        onChange={(e) => {
          setTokenDecimals?.(e.target.value);
          setError?.("");
        }}
        isRequired={true}
      />

      <div className="flex gap-6 mt-10 md:items-center justify-end">
        <button
          onClick={() => router.back()}
          className="text-[#A0A0AB] text-lg leading-10 tracking-tight w-[7.375rem] text-center rounded-[0.625rem] md:text-2xl"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-white leading-10] disabled:bg-[#26272B] hover:text-white tracking-tight hover:bg-[#26272B] md:w-[14.25rem] text-center rounded-[6.25rem] text-lg w-48 md:text-2xl p-[0.6rem] text-black disabled:text-[#A0A0AB]"
        >
          Create token
        </button>
      </div>
    </form>
  );
}
