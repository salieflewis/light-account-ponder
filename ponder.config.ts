import type { Config } from "@ponder/core";
import { http, parseAbiItem } from "viem";

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
      name: "LightAccount",
      network: "optimism-goerli",
      abi: "./abis/LightAccount.json",
      factory: {
        // The address of the factory contract that creates instances of this child contract.
        address: "0x20f2708b85292e0d90cd43c22f292b39232f1e5d",
        // The event emitted by the factory that announces a new instance of this child contract.
        event: parseAbiItem("event LightAccountCreated(address indexed owner, address indexed accountAddress)"),
        // The name of the parameter that contains the address of the new child contract.
        parameter: "accountAddress",
      },
      startBlock: 16939705,
    },
  ],
};
