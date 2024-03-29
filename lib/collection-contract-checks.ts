import { ERC721_ABI } from "./abis";
import { NFT_COLLECTION_ADDRESS, RPC_URL, SUPPLY_LIMIT } from "./constants";
import { BigNumber } from "ethers";
import { createPublicClient, getContract, http } from "viem";

export const syndicateChain = {
  id: 5101,
  name: "Syndicate",
  network: "Syndicate",
  testnet: false,
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-frame.syndicate.io"],
    },
    public: {
      http: ["https://rpc-frame.syndicate.io"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Syndicate Explorer",
      url: "https://explorer-frame.syndicate.io/",
    },
    default: {
      name: "Syndicate Explorer",
      url: "https://explorer-frame.syndicate.io/",
    },
  },
};

const publicClient = createPublicClient({
  chain: syndicateChain,
  transport: http(),
});

export async function checkNFTTotalSupply() {
  try {
    const collection = getContract({
      address: NFT_COLLECTION_ADDRESS,
      abi: ERC721_ABI,
      // 1a. Insert a single client
      client: publicClient,
    });
    const result = await collection!.read!.totalSupply!();
    const supply = BigNumber.from(result);

    // Check if balance is 0
    if (supply.lt(BigNumber.from(SUPPLY_LIMIT))) {
      console.log("Can still mint the collection supply");
      return false;
    } else {
      console.log("Max Supply reached");
      return true;
    }
  } catch (error) {
    console.error("Error while checking NFT total supply:", error);
    // Handle error as per your requirement
    return false;
  }
}

export async function checkNFTBalance(address: string) {
  try {
    const collection = getContract({
      address: NFT_COLLECTION_ADDRESS,
      abi: ERC721_ABI,
      // 1a. Insert a single client
      client: publicClient,
    });
    const result = await collection!.read!.balanceOf!([address]);
    const balance = BigNumber.from(result);

    // Check if balance is 0
    if (balance.eq(BigNumber.from(0))) {
      console.log("Can mint an NFT");
      return false;
    } else {
      console.log("Already minted");
      return true;
    }
  } catch (error) {
    console.error("Error while checking NFT total supply:", error);
    // Handle error as per your requirement
    return false;
  }
}
