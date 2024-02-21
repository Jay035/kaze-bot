import {
	MsgSend,
	PrivateKey,
	BaseAccount,
	DEFAULT_STD_FEE,
	ChainRestAuthApi,
	createTransaction,
	ChainRestTendermintApi,
} from "@injectivelabs/sdk-ts";
import {
	BigNumberInBase,
	DEFAULT_BLOCK_TIMEOUT_HEIGHT,
} from "@injectivelabs/utils";
import { ChainId } from "@injectivelabs/ts-types";
import { Network, getNetworkEndpoints } from "@injectivelabs/networks";

const chainId = "injective-1"; /* ChainId.Mainnet */
const restEndpoint =
	"https://injective-rest.publicnode.com"; /* getNetworkEndpoints(Network.Mainnet).rest */

/** Account Details **/
export async function createInjTransactions(msgs: any, address: string) {
	if (window.keplr) {
		const pubKey = (
			await window.keplr?.getKey(ChainId.Mainnet)
		).pubKey.toString();
		const chainRestAuthApi = new ChainRestAuthApi(restEndpoint);
		const accountDetailsResponse = await chainRestAuthApi.fetchAccount(
			address
		);
		const baseAccount = BaseAccount.fromRestApi(accountDetailsResponse);
		const accountDetails = baseAccount.toAccountDetails();
		/** Block Details */
		const chainRestTendermintApi = new ChainRestTendermintApi(restEndpoint);
		const latestBlock = await chainRestTendermintApi.fetchLatestBlock();
		const latestHeight = latestBlock.header.height;
		const timeoutHeight = new BigNumberInBase(latestHeight).plus(
			DEFAULT_BLOCK_TIMEOUT_HEIGHT
		);
		const { txRaw, signBytes } = createTransaction({
			pubKey,
			chainId,
			fee: DEFAULT_STD_FEE,
			message: msgs,
			sequence: baseAccount.sequence,
			timeoutHeight: timeoutHeight.toNumber(),
			accountNumber: baseAccount.accountNumber,
		});

		return { txRaw, accountNumber: baseAccount };
	}
}
