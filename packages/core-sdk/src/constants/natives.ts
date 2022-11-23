import {
  Filecoin,
} from '../entities/Native'

import { ChainId } from '../enums'
import { NativeMap } from '../types'

export const NATIVE: NativeMap = {
  // TODO - #FilecoinMainnet
  // [ChainId.FILECOIN]: Filecoin.onChain(ChainId.FILECOIN),
  [ChainId.WALLABY]: Filecoin.onChain(ChainId.WALLABY),
}
