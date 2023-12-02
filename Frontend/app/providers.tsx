'use client';

import * as React from 'react';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  avalanche,
  avalancheFuji,
  polygon,
  polygonMumbai,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    avalanche,
    avalancheFuji,
    polygon,
    polygonMumbai,
      ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [avalancheFuji] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'FreeFi',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const demoAppInfo = {
    appName: 'FreeFi',
  };

export function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);
    return (
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
          {mounted && children}
        </RainbowKitProvider>
      </WagmiConfig>
    );
  }
