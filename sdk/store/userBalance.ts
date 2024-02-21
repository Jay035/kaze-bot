import { getNetworkEndpoints } from "@injectivelabs/networks";
import { IndexerGrpcAccountPortfolioApi } from "@injectivelabs/sdk-ts";
import { Network } from "@injectivelabs/networks";
import { formatUnits } from "ethers";

export async function getAllUserBalance(address: string) {
	const endpoints = getNetworkEndpoints(Network.Mainnet);
	const indexerGrpcAccountApi = new IndexerGrpcAccountPortfolioApi(
		endpoints.indexer
	);

	const injectiveAddress = address;

	const portfolio = await indexerGrpcAccountApi.fetchAccountPortfolio(
		injectiveAddress
	);

	// console.log(
	// 	portfolio.bankBalancesList.length > 0
	// 		? portfolio.bankBalancesList[0].amount
	// 		: 0
	// );
	console.log(portfolio);
	const balance = portfolio.bankBalancesList;
}
export async function getInjBalance(account: string) {
	const endpoints = getNetworkEndpoints(Network.Mainnet);
	const indexerGrpcAccountApi = new IndexerGrpcAccountPortfolioApi(
		endpoints.indexer
	);

	const injectiveAddress = account;

	const portfolio = await indexerGrpcAccountApi.fetchAccountPortfolio(
		injectiveAddress
	);

	// console.log(
	// 	portfolio.bankBalancesList.length > 0
	// 		? portfolio.bankBalancesList[0].amount
	// 		: 0
	// );
	console.log(portfolio);
	const balance = portfolio.bankBalancesList.filter((e) => e.denom === "inj");

	return portfolio.bankBalancesList.length > 0 && balance.length > 0
		? formatUnits(balance[0].amount)
		: "0";
}

export async function getUsersSpecificTokenBlance(
	walletAddress: string,
	tokenAddress: string
) {
	const endpoints = getNetworkEndpoints(Network.Mainnet);
	const indexerGrpcAccountApi = new IndexerGrpcAccountPortfolioApi(
		endpoints.indexer
	);

	const injectiveAddress = walletAddress;

	const portfolio = await indexerGrpcAccountApi.fetchAccountPortfolio(
		injectiveAddress
	);

	// console.log(
	// 	portfolio.bankBalancesList.length > 0
	// 		? portfolio.bankBalancesList[0].amount
	// 		: 0
	// );
	console.log(portfolio);
	const balance = portfolio.bankBalancesList.filter(
		(e) => e.denom === tokenAddress
	);

	return portfolio.bankBalancesList.length > 0 && balance.length > 0
		? balance[0].amount
		: "0";
}
