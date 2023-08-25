import { ChainId } from '@sushiswap/sdk';

// import iconFTM from 'assets/imgs/ftm.png';
import iconWFTM from 'assets/imgs/wftm.png';
import iconUSDT from 'assets/imgs/usdt.png';
import iconUSDC from 'assets/imgs/usdc.png';
import iconDAI from 'assets/imgs/dai.png';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

const Tokens = {
  [ChainId.FANTOM]: [
    // {
    //   address: '',
    //   name: 'Fantom',
    //   symbol: 'FTM',
    //   decimals: 18,
    //   icon: iconFTM,
    // },
    {
      address: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
      name: 'Wrapped Fantom',
      symbol: 'WFTM',
      decimals: 18,
      icon: iconWFTM,
    },
    {
      address: '0x049d68029688eabf473097a2fc38ef61633a3c7a',
      name: 'Tether USD',
      symbol: 'fUSDT',
      decimals: 6,
      icon: iconUSDT,
    },
    {
      address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      icon: iconUSDC,
    },
    {
      address: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      decimals: 18,
      icon: iconDAI,
    },
  ],
  [ChainId.FANTOM_TESTNET]: [
    // {
    //   address: '',
    //   name: 'Fantom',
    //   symbol: 'FTM',
    //   decimals: 18,
    //   icon: iconFTM,
    // },
    {
      address: '0xf1277d1ed8ad466beddf92ef448a132661956621',
      name: 'Wrapped Fantom',
      symbol: 'WFTM',
      decimals: 18,
      icon: iconWFTM,
    },
  ],
  [ChainId.ETHEREUM]: [
    {
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      name: 'Wrapped ETH',
      symbol: 'WETH',
      decimals: 18,
      icon: iconWFTM,
    },
  ],
  [ChainId.GÖRLI]: [
    {
      address: '0x0Bb7509324cE409F7bbC4b701f932eAca9736AB7',
      name: 'Wrapped ETH',
      symbol: 'WETH',
      decimals: 18,
      icon: iconWFTM,
    },
  ],
  [ChainId.MATIC]: [
    {
      address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
      name: 'Wrapped ETH',
      symbol: 'WETH',
      decimals: 18,
      icon: iconWFTM,
    },
  ],
  [ChainId.MATIC_TESTNET]: [
    {
      address: '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa',
      name: 'Wrapped ETH',
      symbol: 'WETH',
      decimals: 18,
      icon: iconWFTM,
    },
  ],
};

export default function useTokens() {
  const chain = isMainnet
    ? process.env.REACT_APP_ENV_MAINNET_CHAINID
    : process.env.REACT_APP_ENV_TESTNET_CHAINID; // ChainId.ETHEREUM : ChainId.GÖRLI;

  const tokens = Tokens[chain];

  const getTokenByAddress = addr => {
    const address =
      !addr ||
      addr === '0x0000000000000000000000000000000000000000' ||
      addr === 'ftm'
        ? ''
        : addr;
    return (tokens || []).find(
      tk => tk.address.toLowerCase() === address.toLowerCase()
    );
  };

  return { getTokenByAddress, tokens };
}
