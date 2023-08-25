//import { ChainId } from '@sushiswap/sdk';

import { calculateGasMargin, getHigherGWEI } from 'utils';
import { Contracts } from 'constants/networks';
import useContract from 'hooks/useContract';

import { FACTORY_ABI } from './abi';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';
const CHAIN = isMainnet
  ? process.env.REACT_APP_ENV_MAINNET_CHAINID
  : process.env.REACT_APP_ENV_TESTNET_CHAINID;
// ChainId.ETHEREUM : ChainId.GÖRLI;

export const useFactoryContract = () => {
  const { getContract } = useContract();

  const getERC721FactoryContract = async () =>
    await getContract(Contracts[CHAIN].erc721Factory, FACTORY_ABI);

  //const getPrivateFactoryContract = async () =>
  //  await getContract(Contracts[CHAIN].privateFactory, FACTORY_ABI);

  const getERC1155FactoryContract = async () =>
    await getContract(Contracts[CHAIN].erc1155Factory, FACTORY_ABI);

  //const getPrivateArtFactoryContract = async () =>
  //  await getContract(Contracts[CHAIN].privateArtFactory, FACTORY_ABI);

  const createNFTContract = async (contract, name, symbol, value, from) => {
    const args = [name, symbol];

    const options = {
      value,
      from,
      gasPrice: getHigherGWEI(),
    };

    const gasEstimate = await contract.estimateGas.createNFTContract(
      ...args,
      options
    );
    options.gasLimit = calculateGasMargin(gasEstimate);
    return await contract.createNFTContract(...args, options);
  };

  return {
    getERC721FactoryContract,
    //getPrivateFactoryContract,
    getERC1155FactoryContract,
    //getPrivateArtFactoryContract,
    createNFTContract,
  };
};
