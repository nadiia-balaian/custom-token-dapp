import { Coin } from '../src/types/coin';

export const MOCK_COIN: Coin = {
  id: '1',
  asset: 'ETH',
  decimals: 18,
  tokenAddress: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  displayName: 'Ethereum',
  network: 'ethereum'
};

export const MOCK_COINS: Coin[] = [MOCK_COIN];