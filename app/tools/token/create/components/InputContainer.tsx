"use client";
import CustomFileDropbox from "@/components/CustomFileDropbox";
import CustomInput from "@/components/CustomInput";
import Redirect from "@/components/RedirectButton";
import { useRef, useState } from "react";

type Props = {};

export default function InputContainer({}: Props) {
  const [tokenName, setTokenName] = useState<string>("");
  const [tokenLogo, setTokenLogo] = useState<File | null>();
  const [tokenSymbol, setTokenSymbol] = useState<string>("");
  const [tokenDescription, setTokenDescription] = useState<string>("");
  const [tokenSupply, setTokenSupply] = useState<string>("");
  const [tokenDecimals, setTokenDecimals] = useState<string>("");
  const [error, setError] = useState<string>("");

  const inputRef = useRef<any>(null);
  const handleFileSelected = (file: File | undefined) => {
    setTokenLogo?.(file);

    // console.log(file?.clientWidth)
  };

  const onButtonClick = () => {
    inputRef?.current?.click();
  };
  return (
    <form className="text-[#E4E4E7] flex flex-col gap-6">
      {/* LOGO */}
      <div className=" tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
        <p>
          Logo (attach document)<span className="text-[#F04438]">*</span>
        </p>
        <CustomFileDropbox
          inputRef={inputRef}
          selectedFile={tokenLogo!}
          onFileSelected={handleFileSelected}
          onButtonClick={onButtonClick}
        />
        {tokenLogo && (
          <button
            className="text-[#69FF77] cursor-pointer w-fit "
            onClick={onButtonClick}
          >
            Change file
          </button>
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
          onClick={Redirect}
          className="text-[#A0A0AB)] tracking-tight w-[7.375rem] text-center rounded-[0.625rem] md:text-2xl"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-white disabled:bg-white/50 tracking-tight hover:bg-white/80 w-[14.25rem] text-center rounded-[6.25rem] md:text-2xl p-[0.6rem] text-[#131313]"
        >
          Create token
        </button>
      </div>
    </form>
  );
}
