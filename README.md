# Client for Pricy Marketplace

A client side implementation of the Pricy Marketplace for NFT trading

Pricy allows users: 
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
yarn add --dev serve
npx serve -s -l 443 build
```

#### .env file sample
```
REACT_APP_API_URL=
SKIP_PREFLIGHT_CHECK=true
REACT_APP_ENV=
REACT_APP_USDC=
REACT_APP_FUSDT=
```
