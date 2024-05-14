import { ChainId } from '@sushiswap/sdk';

export const NETWORK_LABEL = {
  [ChainId.ETHEREUM]: 'Ethereum',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.FANTOM]: 'Fantom',
  [ChainId.FANTOM_TESTNET]: 'Fantom Testnet',
  [ChainId.MATIC]: 'Matic',
  [ChainId.MATIC_TESTNET]: 'Matic Testnet',
  [ChainId.XDAI]: 'xDai',
  [ChainId.BSC]: 'BSC',
  [ChainId.BSC_TESTNET]: 'BSC Testnet',
  [ChainId.MOONBASE]: 'Moonbase',
  [ChainId.AVALANCHE]: 'Avalanche',
  [ChainId.FUJI]: 'Fuji',
  [ChainId.HECO]: 'HECO',
  [ChainId.HECO_TESTNET]: 'HECO Testnet',
  [ChainId.HARMONY]: 'Harmony',
  [ChainId.HARMONY_TESTNET]: 'Harmony Testnet',
};

export const Contracts = {
  [ChainId.ETHEREUM]: {
    auction: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
    sales: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    bundleSales: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    erc721Factory: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
    erc1155Factory: '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6',
  },
  [ChainId.GÖRLI]: {
    auction: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
    sales: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    bundleSales: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    erc721Factory: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
    erc1155Factory: '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6',
  },
  [ChainId.MAGMA]: {
    auction: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
    sales: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    bundleSales: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    erc721Factory: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
    erc1155Factory: '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6',
  },
};
