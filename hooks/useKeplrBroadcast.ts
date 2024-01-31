// import {
// 	MsgSend,
// 	BaseAccount,
// 	DEFAULT_STD_FEE,
// 	ChainRestAuthApi,
// 	createTransaction,
// 	CosmosTxV1Beta1Tx,
// 	BroadcastModeKeplr,
// 	ChainRestTendermintApi,
//     getTxRawFromTxRawOrDirectSignResponse,
// } from "@injectivelabs/sdk-ts";
// import {
// 	BigNumberInBase,
// 	DEFAULT_BLOCK_TIMEOUT_HEIGHT,
// } from "@injectivelabs/utils";
// import { ChainId } from "@injectivelabs/ts-types";
// import { Network, getNetworkEndpoints } from "@injectivelabs/networks";

// export default function useKeplrBroadcast() {
// 	const getKeplr = async (chainId: string) => {
// 		if (window.keplr) {
// 			window.keplr.enable(chainId);

// 			const offlineSigner = window.keplr.getOfflineSigner(chainId);
// 			const accounts = await offlineSigner.getAccounts();
// 			const key = await window.keplr.getKey(chainId);

// 			return { offlineSigner, accounts, key };
// 		}
// 	};

// 	const broadcastTx = async (
// 		chainId: ChainId,
// 		txRaw: CosmosTxV1Beta1Tx.TxRaw
// 	) => {
// 		const keplr = await getKeplr(ChainId.Mainnet);
// 		if (window.keplr) {
// 			const result = await window.keplr.sendTx(
// 				chainId,
// 				CosmosTxV1Beta1Tx.TxRaw.encode(txRaw).finish(),
// 				BroadcastModeKeplr.Sync
// 			);

// 			if (!result || result.length === 0) {
// 				alert(new Error("Transaction failed to be broadcasted"));
// 			}

// 			return Buffer.from(result).toString("hex");
// 		}
// 	};

// 	async function init(msgs: any) {
// 		const chainId = "injective-1"; /* ChainId.Mainnet */
// 		const kep = await getKeplr(chainId);
// 		const pubKey = Buffer.from(kep?.key.pubKey!).toString("base64");
// 		const injectiveAddress = kep?.key.bech32Address;
// 		const restEndpoint =
// 			"https://lcd.injective.network"; /* getNetworkEndpoints(Network.Mainnet).rest */
// 		const amount = {
// 			amount: new BigNumberInBase(0.01).toWei().toFixed(),
// 			denom: "inj",
// 		};

// 		/** Account Details **/
// 		const chainRestAuthApi = new ChainRestAuthApi(restEndpoint);
// 		const accountDetailsResponse = await chainRestAuthApi.fetchAccount(
// 			injectiveAddress!
// 		);
// 		const baseAccount = BaseAccount.fromRestApi(accountDetailsResponse);
// 		const accountDetails = baseAccount.toAccountDetails();

// 		/** Block Details */
// 		const chainRestTendermintApi = new ChainRestTendermintApi(restEndpoint);
// 		const latestBlock = await chainRestTendermintApi.fetchLatestBlock();
// 		const latestHeight = latestBlock.header.height;
// 		const timeoutHeight = new BigNumberInBase(latestHeight).plus(
// 			DEFAULT_BLOCK_TIMEOUT_HEIGHT
// 		);

// 		/** Preparing the transaction */
// 		const msg = MsgSend.fromJSON({
// 			amount,
// 			srcInjectiveAddress: injectiveAddress,
// 			dstInjectiveAddress: injectiveAddress,
// 		});

// 		/** Prepare the Transaction **/
// 		const { txRaw, signDoc } = createTransaction({
// 			pubKey,
// 			chainId,
// 			fee: DEFAULT_STD_FEE,
// 			message: msgs,
// 			sequence: baseAccount.sequence,
// 			timeoutHeight: timeoutHeight.toNumber(),
// 			accountNumber: baseAccount.accountNumber,
// 		});

// 		const directSignResponse = await kep?.offlineSigner.signDirect(
// 			injectiveAddress!,
// 			signDoc
// 		);
// 		const txRaw = getTxRawFromTxRawOrDirectSignResponse(directSignResponse!);
// 		const txHash = await broadcastTx(ChainId.Mainnet, txRaw);
// 		const response = await new TxRestClient(restEndpoint).fetchTxPoll(
// 			txHash
// 		);
// 	}
// }
