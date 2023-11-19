import { persisted } from "svelte-persisted-store";

export const wallet = persisted("wallet", {
  address: "",
  ethAddress: "",
  privateKey: "",
  mnemonicPhrase: ""
});

export const files = persisted("files", {});
