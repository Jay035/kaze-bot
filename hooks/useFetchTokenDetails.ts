import { Network, getNetworkEndpoints } from "@injectivelabs/networks";
import { DenomClientAsync } from "@injectivelabs/sdk-ui-ts";
import { TokenFactory } from "@injectivelabs/token-metadata";

export default function useFetchTokenDetails() {
	async function fetchTokenDetails(denom: string) {
		const network = Network.Mainnet;

		const denomClient = new DenomClientAsync(network, {
			endpoints: getNetworkEndpoints(network),
		}); // you can omit the network argument if you want to have the TokenFactory for mainnet

		const token = await denomClient.getDenomToken(denom);

		return token;
	}

	return { fetchTokenDetails };
}
