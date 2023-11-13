import { ponder } from "@/generated";

ponder.on("LightAccountFactory:LightAccountCreated", async ({ event }) => {
    //   // Contains the address of the child contract that emitted the event.
    console.log('Deployed address:', event.params.deployedAddress);
    //   // Contains the salt used by the factory to create the child contract.
    console.log('Salt:', event.params.salt)
    //   // Contains the owner address of the child contract that emitted the event.
    // console.log('Salt:', event.params.owner)
})