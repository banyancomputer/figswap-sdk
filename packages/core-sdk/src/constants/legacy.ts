import { ChainId } from '../enums/ChainId'

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  // TODO - #WallbyOnly / #FilecoinMainnet This is a fake value, we need to figure out how to get the real value
  [ChainId.WALLABY]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  // [ChainId.ETHEREUM]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
}
