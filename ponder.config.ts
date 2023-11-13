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
        address: "0x00006B00f8Ee98Eb4eA288B1E89d00702361e055",
        // The event emitted by the factory that announces a new instance of this child contract.
        event: parseAbiItem("event LightAccountCreated(address indexed deployedAddress, uint256 salt)"),
        // The name of the parameter that contains the address of the new child contract.
        parameter: "deployedAddress",
      },
      startBlock: 16975984,
    },
    {
      name: "LightAccountFactory",
      network: "optimism-goerli",
      abi: "./abis/LightAccountFactory.json",
      address: "0x00006B00f8Ee98Eb4eA288B1E89d00702361e055",
      startBlock: 16975984
    }
  ],
};
