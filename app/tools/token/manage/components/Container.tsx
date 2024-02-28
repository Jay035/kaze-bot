"use client";
import CustomInput from "@/components/CustomInput";
import useFetchTokenDetails from "@/hooks/useFetchTokenDetails";
import { denomIsParsable, parseDenom } from "@/sdk/utils";
import { InjectiveEIP712SigningClient } from "@delphi-labs/shuttle";
import {
  MsgSend,
  WalletConnection,
  useShuttle,
  FakeOfflineSigner,
  BroadcastResult,
  TransactionMsg,
  ProtoMsg,
  AminoMsg,
  OfflineDirectSigningClient,
} from "@delphi-labs/shuttle-react";

import { ChainId } from "@injectivelabs/ts-types";
import { WalletStrategy, MsgBroadcaster } from "@injectivelabs/wallet-ts";
import { TxRaw } from "@injectivelabs/sdk-ts";
import { MsgChangeAdmin } from "@injectivelabs/sdk-ts";
import Image from "next/image";
import { useState } from "react";
import { Network } from "@injectivelabs/networks";
import { createInjTransactions } from "@/sdk/createTransactions";
import { sendTransaction, signTransaction } from "@/sdk/SendInjTx";
const chainId = "injective-1";

export default function Container({}: any) {
  const { fetchTokenDetails } = useFetchTokenDetails();
  const { recentWallet, broadcast, sign } = useShuttle();
  const [tokenData, setTokenData]: any = useState();
  const [mintAddress, setMintAddress] = useState<string>("");
  const [addressVerified, setAddressVerified] = useState<boolean>(false);
  const [authorityRevoked, setAuthorityRevoked] = useState<boolean>(false);
  const walletStrategy = new WalletStrategy({ chainId: ChainId.Mainnet });

  function useMarsClaim(wallet: WalletConnection) {
    function createMsg(denom: string) {
      return [
        new MsgChangeAdmin({
          denom,
          sender: wallet.account.address.toString(),
          newAdmin: "inj1qqqqqqqqqqqqqqqqqqqqqqqqqqqqph4dlwyxj4",
        }),
      ];
    }
    return { createMsg };
  }
  const claims = useMarsClaim(recentWallet!);
  const revokeAuthority = async () => {
    const tx = claims.createMsg(mintAddress);
    const createResponse = await createInjTransactions(
      tx,
      recentWallet?.account.address!
    );
    if (createResponse && recentWallet) {
      await signTransaction(
        createResponse?.txRaw,
        createResponse.accountNumber.accountNumber,
        recentWallet?.account.address
      );
    } else {
      console.log("Undefined Variaables");
    }
  };

  const verifyAddress = () => {
    //	setAddressVerified(true);
  };

  return (
    <section className="flex flex-col gap-8">
      <div className="">
        <CustomInput
          id="mintAddress"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Mint address"
          type="text"
          placeholder="Enter Mint address"
          value={mintAddress}
          onChange={async (ee) => {
            setMintAddress?.(ee.target.value);
            const IsParsable = denomIsParsable(ee.target.value);
            if (IsParsable) {
              console.log("lll");
            } else {
              console.log("kkk");
            }
            const parsedDenom = parseDenom(ee.target.value);
            const tokenDetails = await fetchTokenDetails(parsedDenom);

            //	console.log({ tokenDetails });
            if (tokenDetails) {
              setTokenData(tokenDetails);
              setAddressVerified(true);
            } else {
              console.log("Unable to fetch token Details");
            }
          }}
          isRequired={false}
        />
        <button
          disabled={mintAddress === ""}
          className="bg-[#69FF77] w-[4.7rem] mt-6 border-[#51525C] border disabled:bg-[#69FF77]/50 tracking-[-0.00875rem] hover:bg-[#69FF77]/80 text-center rounded-[0.625rem] text-sm font-semibold py-[0.9rem] px-5 text-black"
        >
          Load
        </button>
      </div>
      {/* Token information */}
      {addressVerified && (
        <div className="flex flex-col gap-8">
          <div className="">
            <h2>Token Information</h2>
            <div className="p-[0.07rem] mt-3 w-full group bg-gradient-to-b from-[#51525C] to-[#414149] hover:bg-[#F4F4F5] rounded-[0.625rem]">
              <div className="bg-[#26272B] rounded-[0.625rem] py-[0.89rem] px-[1.19rem] flex flex-col gap-[0.62rem]">
                {/* Token name */}
                <section className="flex justify-between items-center">
                  <p className="text-sm tracking-[-0.00875rem] text-[#D1D1D6]">
                    Token name
                  </p>
                  <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
                    {tokenData.name}
                  </p>
                </section>
                {/* Token symbol */}
                <section className="flex justify-between items-center">
                  <p className="text-sm tracking-[-0.00875rem] text-[#D1D1D6]">
                    Token symbol
                  </p>
                  <p className="bg-black p-1 rounded-[1.9rem]">
                    <Image
                      className="w-5 h-4"
                      width="0"
                      height="0"
                      src={tokenData?.logo}
                      alt="token logo"
                    />
                  </p>
                </section>
                {/* Token decimals */}
                <section className="flex justify-between items-center">
                  <p className="text-sm tracking-[-0.00875rem] text-[#D1D1D6]">
                    Token decimals
                  </p>
                  <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
                    {tokenData?.decimals}
                  </p>
                </section>
                {/* Version */}
                <section className="flex justify-between items-center">
                  <p className="text-sm tracking-[-0.00875rem] text-[#D1D1D6]">
                    Version
                  </p>
                  <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
                    Inj Token
                  </p>
                </section>
              </div>
            </div>
          </div>
          {/* Mint Authority */}
          <section className="">
            <div className="flex items-center justify-between">
              <h2>Mint Authority</h2>
              {authorityRevoked && (
                <p className="text-[#69FF77] font-medium tracking-[-0.01rem]">
                  Revoked
                </p>
              )}
            </div>
            <div className="p-[0.07rem] mt-3 w-full group bg-gradient-to-b from-[#51525C] to-[#414149] hover:bg-[#F4F4F5] rounded-[0.625rem]">
              <div className="bg-[#26272B] rounded-[0.625rem] py-[0.89rem] px-[1.19rem] flex flex-col gap-[0.62rem]">
                <button
                  disabled={authorityRevoked}
                  onClick={async () => await revokeAuthority()}
                  className="bg-[#FEF1A7] disabled:bg-[#FEF1A7]/50 px-[0.9rem] py-3 lg:py-[1.2rem] rounded-[0.6rem] border border-[#51525C] text-black text-center"
                >
                  Revoke
                </button>
              </div>
            </div>
          </section>
          <div className="flex gap-4 mt-10 md:items-center justify-end">
            <button className="text-[#A0A0AB] text-lg leading-10 tracking-tight text-center rounded-[0.625rem] md:text-2xl">
              Cancel
            </button>
            <button
              disabled={authorityRevoked}
              className={`bg-white leading-10 disabled:bg-[#26272B] tracking-tight hover:bg-[#26272B] text-lg w-48 md:w-[14.25rem] text-center rounded-[6.25rem] md:text-2xl p-[0.6rem] text-black disabled:text-[#A0A0AB]`}
            >
              {authorityRevoked ? "Save Changes" : "Create token"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
