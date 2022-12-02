import { AddressMap } from '../types'
import { ChainId } from '../enums'

// TODO (amiller68): #FilecoinMainnet - Add Filecoin Mainnet for following fields where applicable

// The uni facotry address is the same on all chains
// This is a fake placeholder address for the uni factory. TODO (amiller68) - Get a real address
export const UNI_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'


// SushiToken.col contract - Sushi token is a governance token underlying TJ's SushiSwap
export const SUSHI_ADDRESS: AddressMap = {
  [ChainId.WALLABY]: '0xa62fEd05f0166f73790ce6ea3d5665B4dCBA9f8a',
}

// JoeToken.sol contract - This is Joe governance token for joe specific products. Not MVP
export const JOE_ADDRESS: AddressMap = {
  [ChainId.WALLABY]: '0x497D19586e5567e7045D07872F58811bfeDC21E5',
}

export const USDC_ADDRESS: AddressMap = {
  // Test USDC on Wallaby
  [ChainId.WALLABY]: '0xF5656de36820F114b0Ad9f1771392155F50c5F57',
}

export const USD_ADDRESS: AddressMap = {
  [ChainId.WALLABY]: USDC_ADDRESS[ChainId.WALLABY],
}

export const WETH9_ADDRESS: AddressMap = {
  // Test WFIL contract on Wallaby
  [ChainId.WALLABY]: '0x157C7e9393338eaa110E59583529154E6A3C99e1',

  // Note (amiller68) - Keep this around for internal testing
  [ChainId.ETHEREUM]: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
}

export const WNATIVE_ADDRESS: AddressMap = {
  // Test WNAIVE contract on Wallaby
  [ChainId.WALLABY]: WETH9_ADDRESS[ChainId.WALLABY],
  // [ChainId.FILECOIN]: WETH9_ADDRESS[ChainId.FILECOIN],

  // Note (amiller68) - Keep this around for internal testing
  [ChainId.ETHEREUM]: WETH9_ADDRESS[ChainId.ETHEREUM],
}

export const DAI_ADDRESS: AddressMap = {
  // Note (amiller68): We do not have a DAI contract on Filecoin (yet)
}

export const USDT_ADDRESS: AddressMap = {
  // Note (amiller68): We do not have a USDT contract on Filecoin (yet)
}

// This is needed for staking, not MVP
export const MIM_ADDRESS: AddressMap = {
  // Note (amiller68): Not sure what this is. Here's the contract on Ethereum to peruse:
  // [ChainId.ETHEREUM]: '0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3',
}

// This is needed for staking, not MVP
export const FRAX_ADDRESS: AddressMap = {
  // [ChainId.ETHEREUM]: '0x853d955aCEf822Db058eb8505911ED77F175b99e',
}

// JoeFactory.sol contract - LP token mint used by MasterChef
export const FACTORY_ADDRESS: AddressMap = {
  // TODO (amiller68) - Get a real factory address
  [ChainId.WALLABY]: '0x8569b2f768991646a55464aB2822949e27f7AEFc',

  // Note (amiller68) - Keep this around for internal testing
  [ChainId.ETHEREUM]: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
}

// JoeRouter02.sol contract - Routes and handles Swaps
export const ROUTER_ADDRESS: AddressMap = {
  [ChainId.WALLABY]: '0xfde7e8F2b5d6e2Cf03cDF98B14D260F4B26d0ab9',
  // [ChainId.ETHEREUM]: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
}

// MasterChefJoeV3.sol contract - Main contract addresses: handles minting new LPs, managin tokens, fees, etc
export const MASTERCHEF_ADDRESS: AddressMap = {
  [ChainId.WALLABY]: '0xC66aC3381DA311cFBD0CA09c76FE1cd79A1af667',
  // TODO (amiller68) - Get a MasterChef address
  // [ChainId.ETHEREUM]: '0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd',
}

// JoeBar.sol Shit Coin staking contract holdover from TJ - not MVP but here anyway
export const BAR_ADDRESS: AddressMap = {
  [ChainId.WALLABY]: '0xE2e7D6D35B6906f1750D5e997aF0aaB965E9f351',
}

// JoeMakerV3.sol contract
export const MAKER_ADDRESS: AddressMap = {
  [ChainId.WALLABY]: '0x36e19e9D2593a56391cd4e97e34Ce9C2d3b59476',
}

// CustomMasterChefJoeV2Timelock.sol contract - Not sure what this is
export const TIMELOCK_ADDRESS: AddressMap = {
  [ChainId.WALLABY]: '0x0e119865BDF6773ECB5C59460b1CEA4F430015Ca',
}

// Don't have equivalent for this in figswap contracts
export const SUSHISWAP_SWAPPER_ADDRESS: AddressMap = {
  // TODO (amiller68): Get a sushi swap swapper address
  // [ChainId.ETHEREUM]: '0x1766733112408b95239aD1951925567CB1203084',
}

// Don't have equivalent for this in figswap contracts
export const SUSHISWAP_MULTISWAPPER_ADDRESS: AddressMap = {
  // TODO (amiller68): Get a sushi swap multiswapper address
  // [ChainId.ETHEREUM]: '0x545820d5Cc05248da112419fEfb18522c63C8e12',
}

// Don't have equivalent for this in figswap contracts
export const SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS: AddressMap = {
  // TODO (amiller68): Get a sushi swap multi exact swapper address
  // [ChainId.ETHEREUM]: '0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7',
}

// TODO (amiller68): Research and add these
export const PEGGED_ORACLE_ADDRESS = '0x6cbfbB38498Df0E1e7A4506593cDB02db9001564'

export const SUSHISWAP_TWAP_0_ORACLE_ADDRESS = '0x66F03B0d30838A3fee971928627ea6F59B236065'

export const SUSHISWAP_TWAP_1_ORACLE_ADDRESS = '0x0D51b575591F8f74a2763Ade75D3CDCf6789266f'

export const CHAINLINK_ORACLE_ADDRESS: AddressMap = {
}

// Don't have equivalent for this in figswap contracts
export const BORING_HELPER_ADDRESS: AddressMap = {
  // TODO (amiller68): Get a Boring Helper address
  // [ChainId.ETHEREUM]: '0x11Ca5375AdAfd6205E41131A4409f182677996E6',
}

// Don't have equivalent for this in figswap contracts
export const MINICHEF_ADDRESS: AddressMap = {
  // TODO (amiller68): Get a MiniChef address (Maybe we don't need this?)
  // examples:
  // [ChainId.MOONBEAM]: '0x011E52E4E40CF9498c79273329E8827b21E2e581',
}

// MasterChefJoeV2 contract
export const MASTERCHEF_V2_ADDRESS: AddressMap = {
  [ChainId.WALLABY]: '0x9Cc795d9dBEFC04697B55CfB6607223Aa59a60aD',
}

// Don't have equivalent for this in figswap contracts
export const ENS_REGISTRAR_ADDRESS: AddressMap = {
  // TODO (amiller68): Get a ENS Registrar address
  // [ChainId.ETHEREUM]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}

// Zap.sol contract
export const ZAPPER_ADDRESS: AddressMap = {
  [ChainId.WALLABY]: '0x0c1d43a5341b66B948403810ab9a74Ca7dCf9B3d',
  // TODO (amiller68): Get a Zapper address
  // [ChainId.ETHEREUM]: '0xcff6eF0B9916682B37D80c19cFF8949bc1886bC2',
}

// Don't have equivalent for this in figswap contracts
export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  // TODO (amiller68): Get a Merkle Distributor address (Maybe we don't need this?)
  // [ChainId.ETHEREUM]: '0xcBE6B83e77cdc011Cc18F6f0Df8444E5783ed982',
}

// Addresses pointing to (specifically) Uniswap MultiCall2 contracts:
// see https://etherscan.io/address/0x1F98415757620B543A52E61c46B32eB19261F984#code
// Multicall2.sol contract
export const MULTICALL2_ADDRESS: AddressMap = {
  [ChainId.WALLABY]: '0x92e010550ebf8d35B26Fb53d708e687E11a572c2',
}

// Don't have equivalent for this in figswap contracts
export const BALANCE_FETCHER_ADDRESS: AddressMap = {
  // [ChainId.ETHEREUM]: '0x386a4B75578C7843A6082EFe181D5d629236C047',
}

// Don't have equivalent for this in figswap contracts
export const MULTISIG_ADDRESS: AddressMap = {
  // [ChainId.ETHEREUM]: '0x19B3Eb3Af5D93b77a5619b047De0EED7115A19e7',
}
