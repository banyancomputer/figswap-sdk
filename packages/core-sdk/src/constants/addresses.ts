import { AddressMap } from '../types'
import { ChainId } from '../enums'

// TODO (amiller68): #FilecoinMainnet - Add Filecoin Mainnet for following fields where applicable
// TODO (amiller68): Implement our own Tokens and Services
// TODO (amiller68): Map out Token Meta Deta Dependencies and see if we can make this setup less confusing

export const SUSHI_ADDRESS: AddressMap = {
  // TODO (amiller68): #WallabyOnly - Add address of deployed Contract / Token
  // [ChainId.Wallaby]: '0x0000000000000000000000000000000000000000',
  // [ChainId.Filecoin]: '0x0000000000000000000000000000000000000000',
}

export const USDC_ADDRESS: AddressMap = {
  // Test USDC on Wallaby
  [ChainId.WALLABY]: '0x07c6E5e3e0614e3D099a68eF4eb53B8c5C72D9Af',
  // [ChainId.FILECOIN]: '0x0000000000000000000000000000000000000000',
}

export const USD_ADDRESS: AddressMap = {
  [ChainId.WALLABY]: USDC_ADDRESS[ChainId.WALLABY],
  // [ChainId.FILECOIN]: USDC_ADDRESS[ChainId.FILECOIN],
}

export const WETH9_ADDRESS: AddressMap = {
  // Test WFIL contract on Wallaby
  [ChainId.WALLABY]: '0x6fAAC5AE22E9d9a4166e6145Afb9Fe4B6398320A',
  // [ChainId.FILECOIN]: '0x0b1ba0af832d7c05fd64161e0db78e85978e8082',
}

export const WNATIVE_ADDRESS: AddressMap = {
  // Test WNAIVE contract on Wallaby
  [ChainId.WALLABY]: WETH9_ADDRESS[ChainId.WALLABY],
  // [ChainId.FILECOIN]: WETH9_ADDRESS[ChainId.FILECOIN],
}

export const DAI_ADDRESS: AddressMap = {
  // Note (amiller68): We do not have a DAI contract on Filecoin (yet)
}

export const USDT_ADDRESS: AddressMap = {
  // Note (amiller68): We do not have a USDT contract on Filecoin (yet)
}

export const MIM_ADDRESS: AddressMap = {
  // Note (amiller68): Not sure what this is. Here's the contract on Ethereum to peruse:
  // [ChainId.ETHEREUM]: '0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3',
}

export const FRAX_ADDRESS: AddressMap = {
  // Not sure what this is. Here's the contract on Ethereum to peruse:
  // [ChainId.ETHEREUM]: '0x853d955aCEf822Db058eb8505911ED77F175b99e',
}

export const FACTORY_ADDRESS: AddressMap = {
  // TODO (amiller68) - Get a real factory address
  // [ChainId.WALLABY]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  // [ChainId.ETHEREUM]: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
}

export const ROUTER_ADDRESS: AddressMap = {
  // TODO (amiller68) - Get a real router address
  // [ChainId.ETHEREUM]: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
}

// Main contract addresses
export const MASTERCHEF_ADDRESS: AddressMap = {
  // TODO (amiller68) - Get a MasterChef address
  // [ChainId.ETHEREUM]: '0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd',
}

export const BAR_ADDRESS: AddressMap = {
  // TODO (amiller68) - Get a Bar address
  // [ChainId.ETHEREUM]: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
}

export const MAKER_ADDRESS: AddressMap = {
  // TODO (amiller68) - Get a Maker address
  // [ChainId.ETHEREUM]: '0xE11fc0B43ab98Eb91e9836129d1ee7c3Bc95df50',
}

export const TIMELOCK_ADDRESS: AddressMap = {
  // TODO (amiller68): #WallabyOnly - We will only support Wallaby until we figure out MultiChain
  // [ChainId.ETHEREUM]: '0x9a8541Ddf3a932a9A922B607e9CF7301f1d47bD1',
}

export const BENTOBOX_ADDRESS: AddressMap = {
  // Note (amiller68): I don't think we need this
}

export const KASHI_ADDRESS: AddressMap = {
  // Note (amiller68): I don't think we need this
}

export const SUSHISWAP_SWAPPER_ADDRESS: AddressMap = {
  // TODO (amiller68): Get a sushi swap swapper address
  // [ChainId.ETHEREUM]: '0x1766733112408b95239aD1951925567CB1203084',
}

export const SUSHISWAP_MULTISWAPPER_ADDRESS: AddressMap = {
  // TODO (amiller68): Get a sushi swap multiswapper address
  // [ChainId.ETHEREUM]: '0x545820d5Cc05248da112419fEfb18522c63C8e12',
}

export const SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS: AddressMap = {
  // TODO (amiller68): Get a sushi swap multi exact swapper address
  // [ChainId.ETHEREUM]: '0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7',
}

// TODO (amiller68): Research and add these
export const PEGGED_ORACLE_ADDRESS = '0x6cbfbB38498Df0E1e7A4506593cDB02db9001564'

export const SUSHISWAP_TWAP_0_ORACLE_ADDRESS = '0x66F03B0d30838A3fee971928627ea6F59B236065'

export const SUSHISWAP_TWAP_1_ORACLE_ADDRESS = '0x0D51b575591F8f74a2763Ade75D3CDCf6789266f'

export const CHAINLINK_ORACLE_ADDRESS: AddressMap = {
  // TODO (amiller68): Get a chainlink oracle address
  // [ChainId.ETHEREUM]: '0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB',
}

export const BORING_HELPER_ADDRESS: AddressMap = {
  // TODO (amiller68): Get a Boring Helper address
  // [ChainId.ETHEREUM]: '0x11Ca5375AdAfd6205E41131A4409f182677996E6',
}

export const MINICHEF_ADDRESS: AddressMap = {
  // TODO (amiller68): Get a MiniChef address (Maybe we don't need this?)
  // examples:
  // [ChainId.MOONBEAM]: '0x011E52E4E40CF9498c79273329E8827b21E2e581',
  // [ChainId.METIS]: '0x1334c8e873E1cae8467156e2A81d1C8b566B2da1',
}

export const MASTERCHEF_V2_ADDRESS: AddressMap = {
  // TODO (amiller68): Get a MasterChef V2 address (Maybe we don't need this?)
  // [ChainId.ETHEREUM]: '0xEF0881eC094552b2e128Cf945EF17a6752B4Ec5d',
}

export const ENS_REGISTRAR_ADDRESS: AddressMap = {
  // TODO (amiller68): Get a ENS Registrar address
  // [ChainId.ETHEREUM]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}

export const ZAPPER_ADDRESS: AddressMap = {
  // TODO (amiller68): Get a Zapper address
  // [ChainId.ETHEREUM]: '0xcff6eF0B9916682B37D80c19cFF8949bc1886bC2',
}

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  // TODO (amiller68): Get a Merkle Distributor address (Maybe we don't need this?)
  // [ChainId.ETHEREUM]: '0xcBE6B83e77cdc011Cc18F6f0Df8444E5783ed982',
}

// Addresses pointing to (specifically) Uniswap MultiCall2 contracts:
// see https://etherscan.io/address/0x1F98415757620B543A52E61c46B32eB19261F984#code
export const MULTICALL2_ADDRESS: AddressMap = {
  [ChainId.WALLABY]: '0xDF0B00c79472De6E5ACAE231e2d66A8C32efb72f',
}

// Note (amiller68): I don't think we need this
export const BALANCE_FETCHER_ADDRESS: AddressMap = {
  // [ChainId.ETHEREUM]: '0x386a4B75578C7843A6082EFe181D5d629236C047',
}

// Note (amiller68): I don't think we need this
export const MULTISIG_ADDRESS: AddressMap = {
  // [ChainId.ETHEREUM]: '0x19B3Eb3Af5D93b77a5619b047De0EED7115A19e7',
}
