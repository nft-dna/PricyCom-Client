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

export const network = new NetworkConnector({
  defaultChainId: isMainnet
    ? process.env.REACT_APP_ENV_MAINNET_CHAINID
    : process.env.REACT_APP_ENV_TESTNET_CHAINID,
  //ChainId.ETHEREUM,
  urls: RPC,
});

export const injected = new InjectedConnector({
  supportedChainIds: isMainnet
    ? [
        process.env.REACT_APP_ENV_MAINNET_CHAINID, // ethereum is 1
      ]
    : [
        process.env.REACT_APP_ENV_TESTNET_CHAINID, // goerli testnet is 5
      ],
});

export const walletlink = new WalletLinkConnector({
  url: 'https://rpc.ftm.tools',
  appName: 'Volcano',
  appLogoUrl: VOLCANO_LOGO_URL,
});
