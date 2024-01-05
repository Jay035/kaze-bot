"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useEffect } from "react";
// import {
//   RainbowKitProvider,
//   getDefaultWallets,
//   connectorsForWallets,
//   darkTheme,
// } from "@rainbow-me/rainbowkit";
// import {
//   argentWallet,
//   trustWallet,
//   ledgerWallet,
// } from "@rainbow-me/rainbowkit/wallets";
// import { configureChains, createConfig, WagmiConfig } from "wagmi";
// import {
//   mainnet,
//   polygon,
//   optimism,
//   arbitrum,
//   base,
//   zora,
//   goerli,
//   optimismGoerli,
// } from "wagmi/chains";
// import { publicProvider } from "wagmi/providers/public";
// // import { Web3GlobalProvider } from "./Web3GlobalProvider";
// import { useEffect } from "react";

// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [
//     mainnet,
//     polygon,
//     optimism,
//     optimismGoerli,
//     arbitrum,
//     base,
//     zora,
//     ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [goerli] : []),
//   ],
//   [publicProvider()]
// );

// const projectId = process?.env?.NEXT_PUBLIC_PROJECT_ID!;

// const { wallets } = getDefaultWallets({
//   appName: "Solimax launchpad",
//   projectId,
//   chains,
// });

// const demoAppInfo = {
//   appName: "Solimax launchpad",
// };

// const connectors = connectorsForWallets([
//   ...wallets,
//   {
//     groupName: "Other",
//     wallets: [
//       argentWallet({ projectId, chains }),
//       trustWallet({ projectId, chains }),
//       ledgerWallet({ projectId, chains }),
//     ],
//   },
// ]);

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
//   webSocketPublicClient,
// });

export function Providers({ children }: { children: React.ReactNode }) {
  const mounted = useIsMounted();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in",
    });
  }, []);
  return mounted && <>{children}</>
  // (
    // <WagmiConfig config={wagmiConfig}>
    //   <RainbowKitProvider
    //     chains={chains}
    //     appInfo={demoAppInfo}
    //     theme={darkTheme()}
    //     coolMode
    //   >
          // {mounted && children}
    //   </RainbowKitProvider>
    // </WagmiConfig>
  // );
}
