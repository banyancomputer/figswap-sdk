import { ChainId } from '../enums'
import { ChainKey } from '../enums'

// TODO - #FilecoinMainnet - Add Filecoin Mainnet Key

// A map of keys for each chain
export const CHAIN_KEY: { [chainId: number]: ChainKey } = {
  [ChainId.WALLABY]: ChainKey.WALLABY,
  [ChainId.ETHEREUM]: ChainKey.ETHEREUM,
}
