"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import {
	CosmostationExtensionProvider,
	KeplrExtensionProvider,
	LeapCosmosExtensionProvider,
	MetamaskExtensionProvider,
	StationExtensionProvider,
	XDEFICosmosExtensionProvider,
	CosmostationMobileProvider,
	KeplrMobileProvider,
	LeapCosmosMobileProvider,
	LeapMetamaskCosmosSnapExtensionProvider,
	MetamaskMobileProvider,
	ShuttleProvider,
	OkxWalletExtensionProvider,
	NinjiExtensionProvider,
} from "@delphi-labs/shuttle-react";
import { useIsMounted } from "@/hooks/useIsMounted";
import {
	OSMOSIS_MAINNET,
	MARS_MAINNET,
	TERRA_MAINNET,
	TERRA_TESTNET,
	INJECTIVE_MAINNET,
	INJECTIVE_TESTNET,
	NEUTRON_MAINNET,
	NEUTRON_TESTNET,
} from "@/sdk/networks";
import { useEffect } from "react";
const extensionProviders = [
	new KeplrExtensionProvider({
		networks: [INJECTIVE_MAINNET, INJECTIVE_TESTNET],
	}),
	new CosmostationExtensionProvider({
		networks: [INJECTIVE_MAINNET, INJECTIVE_TESTNET],
	}),
	new LeapCosmosExtensionProvider({
		networks: [INJECTIVE_MAINNET, INJECTIVE_TESTNET],
	}),
	new LeapMetamaskCosmosSnapExtensionProvider({
		networks: [INJECTIVE_MAINNET, INJECTIVE_TESTNET],
	}),
	new NinjiExtensionProvider({
		networks: [INJECTIVE_MAINNET],
	}),
];
const mobileProviders = [
	new KeplrMobileProvider({
		networks: [INJECTIVE_MAINNET, INJECTIVE_TESTNET],
	}),
	new LeapCosmosMobileProvider({
		networks: [INJECTIVE_MAINNET, INJECTIVE_TESTNET],
	}),
];

export function Providers({ children }: { children: React.ReactNode }) {
	const mounted = useIsMounted();

	useEffect(() => {
		AOS.init({
			duration: 1200,
			easing: "ease-in",
		});
	}, []);
	return (
		<ShuttleProvider
			walletConnectProjectId={""}
			mobileProviders={mobileProviders}
			extensionProviders={extensionProviders}
			persistent
		>
			{mounted && <>{children}</>}
		</ShuttleProvider>
	);
}
