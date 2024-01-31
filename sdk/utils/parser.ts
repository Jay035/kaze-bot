export function parseDenom(denom: string) {
	console.log({ denom });
	return denom.replace(/-/g, "/");
}
export function denomIsParsable(denom: string) {
	return denom.includes("/");
}

export function trimAddress(walletAddress: string, length = 5) {
	if (walletAddress && walletAddress.length <= length) {
		return walletAddress; // No need to trim if it's shorter than the specified length
	}
	const start = walletAddress.slice(0, length);
	const end = walletAddress.slice(-length);
	const trimmedAddress = `${start}...${end}`;
	return trimmedAddress;
}
