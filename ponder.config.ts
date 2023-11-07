import type { Config } from "@ponder/core";
import { http } from "viem";

export const config: Config = {
  networks: [
    {
      name: "optimism-goerli",
      chainId: 420,
      transport: http(process.env.PONDER_RPC_URL_420),
    },
  ],
  contracts: [
    {
      name: "LightAccountFactory",
      network: "optimism-goerli",
      abi: "./abis/LightAccountFactory.json",
      address: "0x20f2708b85292e0d90cd43c22f292b39232f1e5d",
      startBlock: 16939705,
    },
  ],
};
