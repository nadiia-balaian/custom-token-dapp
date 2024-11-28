import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { wagmiAdapter } from "../src/wagmi";
import React from 'react';

const queryClient = new QueryClient();

const appRender = (ui: React.ReactElement, options = {}) => {
  return render(
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {ui}
      </QueryClientProvider>
    </WagmiProvider>,
    options
  );
};

export { appRender, render };
