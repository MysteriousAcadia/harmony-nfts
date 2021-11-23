import { InjectedConnector } from "@web3-react/injected-connector";
import { OneWalletConnector } from "@harmony-react/onewallet-connector";

export const onewallet = new OneWalletConnector({ chainId: 1 });

export const injected = new InjectedConnector({
  supportedChainIds: [1666700000],
});
