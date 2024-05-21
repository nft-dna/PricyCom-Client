//import { ChainId } from '@sushiswap/sdk';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

import { NetworkConnector } from './NetworkConnector';

import VOLCANO_LOGO_URL from '../assets/svgs/logo_blue.svg';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

const RPC = isMainnet
  ? {
      [process.env.REACT_APP_ENV_MAINNET_CHAINID]:
        process.env.REACT_APP_ENV_MAINNET_RPC,
      //[ChainId.ETHEREUM]: process.env.REACT_APP_ENV_MAINNET_RPC,
    }
  : {
      [process.env.REACT_APP_ENV_TESTNET_CHAINID]:
        process.env.REACT_APP_ENV_TESTNET_RPC,
      //[ChainId.GÖRLI]: process.env.REACT_APP_ENV_TESTNET_RPC,
    };
const CHAINID = parseInt(
  isMainnet
    ? process.env.REACT_APP_ENV_MAINNET_CHAINID
    : process.env.REACT_APP_ENV_TESTNET_CHAINID,
  10
);

export const network = new NetworkConnector({
  defaultChainId: CHAINID,
  //ChainId.ETHEREUM,
  urls: RPC,
});

export const injected = new InjectedConnector({
  supportedChainIds: [CHAINID],
});

export const walletlink = new WalletLinkConnector({
  url: RPC,
  appName: 'Volcano',
  appLogoUrl: VOLCANO_LOGO_URL,
});
