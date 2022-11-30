import { ChainTokenMap, TokenMap } from '../types'
import { SUSHI_ADDRESS, USDC_ADDRESS, USD_ADDRESS, WETH9_ADDRESS, WNATIVE_ADDRESS } from './addresses'

import { ChainId } from '../enums'
import { Token } from '../entities/Token'

// TODO - #FilecoinMainnet - populate maps with relevant tokens

// Map of USDC token for each chain
export const USDC: TokenMap = {
  [ChainId.WALLABY]: new Token(ChainId.WALLABY, USDC_ADDRESS[ChainId.WALLABY], 6, 'USDC', 'USD Coin'),
}

// Note (amiller68) `USD` is a holdover from the original SushiSwap fork. This map is used as addition to the `USDC` map, so please keep it.
// Redefintion of USD tokens for each chain
export const USD: TokenMap = {
  ...USDC,
}

// Map of wrapped native tokens for each chain
export const WETH9: TokenMap = {
  [ChainId.WALLABY]: new Token(ChainId.WALLABY, WETH9_ADDRESS[ChainId.WALLABY], 18, 'WFIL', 'Wrapped Filecoin'),

  // Note (amiller68) - Keep this around for internal testing
  [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, WETH9_ADDRESS[ChainId.ETHEREUM], 18, 'WETH9', 'Wrapped Ether'),
}

// Redefintion of Map of wrapped native tokens for each chain. This map is used as addition to the `WETH9` map, so please keep it.
export const WNATIVE: TokenMap = {
  [ChainId.WALLABY]: WETH9[ChainId.WALLABY],

  // Note (amiller68) - Keep this around for internal testing
  [ChainId.ETHEREUM]: WETH9[ChainId.ETHEREUM],
}

// Map of SUSHI token for each chain
export const SUSHI: ChainTokenMap = {
  // TODO (amiller68) - Do we need to add this?
  [ChainId.WALLABY]: new Token(ChainId.WALLABY, SUSHI_ADDRESS[ChainId.WALLABY], 18, 'SUSHI', 'SushiToken'),

}
