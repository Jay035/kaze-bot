import {
	MsgBroadcaster,
	Wallet,
	WalletStrategy,
} from "@injectivelabs/wallet-ts";
import { EthereumChainId, ChainId } from "@injectivelabs/ts-types";
import { DirectSignResponse, TxRaw, TxRestClient } from "@injectivelabs/sdk-ts";
import { Network } from "@injectivelabs/networks";

export const walletStrategy = new WalletStrategy({
	chainId: ChainId.Mainnet,
	endpoints: {
		rest: "https://injective-rest.publicnode.com",
		rpc: "https://injective-rpc.publicnode.com:443",
	},
	wallet: Wallet.Keplr,
});

// Sign an Injective transaction
// export const signTransaction = async (
// 	tx: TxRaw,
// 	accountNumber: number,
// 	address: string
// ): Promise<any> => {
// 	const response = await walletStrategy.signCosmosTransaction({
// 		txRaw: tx,
// 		accountNumber,
// 		address,
// 		chainId: ChainId.Mainnet,
// 	});

// 	return response.signature.signature;
// };

// // Send an Injective transaction
// export const sendTransaction = async (msg: any, address: any): Promise<any> => {
// 	const res = new MsgBroadcaster({
// 		network: Network.Mainnet,
// 		walletStrategy: walletStrategy,
// 	}).broadcast({ address, msgs: msg });
// 	// create const name u

// 	return res;
// };
