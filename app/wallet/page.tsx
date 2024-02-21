"use client";
import RedirectButton from "@/components/RedirectButton";
import useWallet from "@/hooks/useWallet";
import { useShuttlePortStore } from "@/sdk/store";
import { useShuttle } from "@delphi-labs/shuttle-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {};

export default function Wallet({}: Props) {
	const [currentNetworkId, switchNetwork] = useShuttlePortStore((state) => [
		state.currentNetworkId,
		state.switchNetwork,
	]);
	const {
		connect,
		mobileConnect,
		disconnectWallet,
		extensionProviders,
		mobileProviders,
	} = useShuttle();
	const [qrCodeUrl, setQrCodeUrl] = useState("");
	const wallet = useWallet();
	useEffect(() => {
		switchNetwork("injective-1");
	}, []);

	return (
		<main className="min-h-screen mt-6 sm:mt-0 p-16 md:p-40 flex justify-center items-center">
			<div className="w-full max-w-[36rem] h-[25rem] md:h-[30rem] bg-[#3F3F46] p-[0.07rem] rounded-3xl">
				<div className="relative w-full h-full pt-[1.56rem] pb-[1.87rem] px-9 text-center text-white bg-[#18181B] rounded-3xl">
					<h1 className="text-xl md:text-2xl font-medium">
						Connect wallet
					</h1>
					<RedirectButton className="ri-close-line cursor-pointer text-2xl absolute right-10 sm:right-12 top-6 font-medium" />
					<div className="w-full mt-[2.13rem] bg-[#3F3F46] p-[0.07rem] rounded-3xl">
						<div className="w-full py-[1.56rem] bg-[#212124] px-6 md:px-9 text-center items-center gap-[0.9rem] pt-16 md:pt-20 pb-[1.94rem] flex justify-center flex-col text-white rounded-3xl">
							<Image
								width="0"
								height="0"
								className="w-12 h-12 md:w-[5.5rem] md:h-[5.5rem]"
								src="/Keplr_icon_ver.svg"
								alt="keplr logo"
							/>
							<span className="font-semibold text-2xl md:text-[2.5rem] leading-normal">
								{extensionProviders[0].name}
							</span>
							{wallet && (
								<div>
									<button
										className="mt-[1.87rem] bg-[#69FF77] hover:bg-[#69FF77]/70 md:text-lg rounded-lg text-black w-full py-[0.63rem] text-sm font-bold"
										onClick={() => disconnectWallet(wallet)}
									>
										Disconnect
									</button>
								</div>
							)}
							{!wallet && (
								<button
									key={extensionProviders[0].id}
									onClick={() =>
										connect({
											extensionProviderId:
												extensionProviders[0].id,
											chainId: currentNetworkId
												? "injective-1"
												: "injective-1",
										})
									}
									className="mt-[1.87rem] bg-[#69FF77] hover:bg-[#69FF77]/70 md:text-lg rounded-lg text-black w-full py-[0.63rem] text-sm font-bold"
								>
									Click here to connect
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
