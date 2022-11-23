import { ChainId } from '../enums'
import { ChainKey } from '../enums'

export const CHAIN_KEY: { [chainId: number]: ChainKey } = {
  [ChainId.WALLABY]: ChainKey.WALLABY,
  [ChainId.FILECOIN]: ChainKey.FILECOIN,
}
