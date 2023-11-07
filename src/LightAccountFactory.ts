import { ponder } from "@/generated";

ponder.on(
  "LightAccountFactory:LightAccountCreated",
  async ({ event, context }) => {
    console.log(event.params);
  }
);
