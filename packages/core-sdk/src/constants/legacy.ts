import { ChainId } from '../enums/ChainId'

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  // Note (amiller68) This is a fake value, we need to figure out how to get the real value
  [ChainId.WALLABY]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  // TODO - #FilecoinMainnet 
  // Note (amiller68) This is the init code hash for the Ethereum mainnet, for reference. Keep this around for internal testing
  [ChainId.ETHEREUM]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
}
