import { useShuttle } from "@delphi-labs/shuttle-react";

import { useShuttlePortStore } from "@/sdk/store";

export default function useWallet() {
	const currentNetworkId = useShuttlePortStore(
		(state) => state.currentNetworkId
	);

	const { getWallets } = useShuttle();
	//console.log(getWallets({ chainId: currentNetworkId })[0]);

	return getWallets({ chainId: currentNetworkId })[0];
}
