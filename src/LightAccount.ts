import { ponder } from "@/generated";

ponder.on("LightAccount:LightAccountInitialized", async ({ event }) => {
  // Contains the address of the child contract that emitted the event.
  console.log('New account:', event.log.address);
  // Contains the owner address of the child contract that emitted the event.
  console.log('Owner address:', event.params.owner);
  // Contains the salt used by the factory to create the child contract.
});