# Client for Volcano Marketplace

A client side implementation of the Volcano Marketplace for NFT trading

Volcano allows users: 
- to explore existing NFTs on Fantom Opera network.
- to create a new collection of a new NFT
- to register a collection of already deployed NFT.
- to buy / sell / collect rare NFTs.

See [Guide](https://docs.fantom.foundation/tutorials/collection-and-bundle-guide-on-artion)

## Project Setup
```
yarn install
```

## Compile
```
yarn run start
```

### Compiles and minifies for production
```
yarn run build
yarn add --dev serve (if not done already)
npx serve -s -l 443 build
 (or using tmux - Ctrl+B, d)
```

### Stop a running instance
```
netstat -apno | grep ":443" (check\copy process PID)
kill -9 PID
```

#### .env file sample
```
SKIP_PREFLIGHT_CHECK=true

REACT_APP_ENV='TESTNET'
#REACT_APP_ENV='MAINNET'

REACT_APP_ENV_TESTNET_RPC='https://ethereum-goerli.publicnode.com/'
REACT_APP_ENV_TESTNET_CHAINID=5
REACT_APP_ENV_TESTNET_API_URL='http://api.testnet.pricy.com'
REACT_APP_ENV_TESTNET_STORAGE_URL='http://storage.testnet.pricy.com'

REACT_APP_ENV_MAINNET_RPC='https://eth.meowrpc.com/'
REACT_APP_ENV_MAINNET_CHAINID=1
REACT_APP_ENV_MAINNET_API_URL='https://api.pricy.com'
REACT_APP_ENV_MAINNET_STORAGE_URL='https://storage.pricy.com'

REACT_APP_USDC=
REACT_APP_FUSDT=
```
