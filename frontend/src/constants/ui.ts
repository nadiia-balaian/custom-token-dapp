import { Coin } from "@/types/coin";

export const GTX: Coin = {
  displayName: "Gatox",
  id: "GTX",
  asset: "GTX",
  decimals: 18,
  tokenAddress: "0x40e1479C40F35C26875dA2E85AE1435F44d76d13",
  network: "sepolia",
};

export const ETH: Coin = {
  displayName: "Ethereum",
  id: "ETH",
  asset: "ETH",
  decimals: 18,
  tokenAddress: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
  network: "sepolia",
  isNative: true,
};

export const DEFAULT_TOKENS: Coin[] = [GTX, ETH];