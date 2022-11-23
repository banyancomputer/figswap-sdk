import { Currency } from '../Currency'
import { NativeCurrency } from '../NativeCurrency'
import { Token } from '../Token'
import { WETH9 } from '../../constants/tokens'
import invariant from 'tiny-invariant'

/** MAYBE NOT NEEDED
 * Native token for the Wallaby network
 */
export class tFilecoin extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'tFIL', 'Test Filecoin')
  }

  public get wrapped(): Token {
    const weth9 = WETH9[this.chainId]
    invariant(!!weth9, 'WRAPPED')
    return weth9
  }

  private static _cache: { [chainId: number]: tFilecoin } = {}

  public static onChain(chainId: number): tFilecoin {
    return this._cache[chainId] ?? (this._cache[chainId] = new tFilecoin(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
