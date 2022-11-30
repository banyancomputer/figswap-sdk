import {
  Filecoin,
  Ether
} from '../entities/Native'

import { ChainId } from '../enums'
import { NativeMap } from '../types'

// This is a map of all the native currencies for each chain
export const NATIVE: NativeMap = {
  // TODO - #FilecoinMainnet - Add Filecoin Mainnet native currency
  [ChainId.WALLABY]: Filecoin.onChain(ChainId.WALLABY),

  // Note (amiller68) - Keep this around for internal testing
  [ChainId.ETHEREUM]: Ether.onChain(ChainId.ETHEREUM),
}
