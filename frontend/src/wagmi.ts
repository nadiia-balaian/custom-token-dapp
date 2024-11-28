import { http, createConfig } from 'wagmi'
import { sepolia, AppKitNetwork } from '@reown/appkit/networks'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
import { WALLET_CONNECT_PROJECT_ID } from './constants/default'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { createAppKit } from '@reown/appkit/react'

const projectId = WALLET_CONNECT_PROJECT_ID;

const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://example.com',
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

const networks: [AppKitNetwork, ...AppKitNetwork[]] = [sepolia]

export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
})


createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true,
    swaps: false,
  }
})

export const config = createConfig({
  chains: [sepolia],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [sepolia.id]: http(),
  },
})