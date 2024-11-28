export interface Coin {
  id: string;
  asset: string;
  decimals: number;
  tokenAddress: `0x${string}`;
  displayName: string;
  network: Network;
  isNative?: boolean;
}


type Network = 'ethereum' | 'arbitrum' | 'avax' | 'base' | 'optimism' | 'polygon' | 'sepolia' | string;