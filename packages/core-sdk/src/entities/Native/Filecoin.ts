import { Currency } from '../Currency'
import { NativeCurrency } from '../NativeCurrency'
import { Token } from '../Token'
import { WETH9 } from '../../constants/tokens'
import invariant from 'tiny-invariant'

export class Filecoin extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'FIL', 'Filecoin')
  }

  public get wrapped(): Token {
    const weth9 = WETH9[this.chainId]
    invariant(!!weth9, 'WRAPPED')
    return weth9
  }

  private static _cache: { [chainId: number]: Filecoin } = {}

  public static onChain(chainId: number): Filecoin {
    return this._cache[chainId] ?? (this._cache[chainId] = new Filecoin(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
