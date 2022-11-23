import { Currency } from '../Currency'
import { NativeCurrency } from '../NativeCurrency'
import { Token } from '../Token'
import { WETH9 } from '../../constants/tokens'
import invariant from 'tiny-invariant'
import {ChainId} from "../../enums";

/*
    * Native token for the Filecoin Mainnet and Testnet
 */
export class Filecoin extends NativeCurrency {
  protected constructor(chainId: number) {
    // Initialize the Filecoin native currency depending on the chainId
    super(chainId, 18, chainId === ChainId.FILECOIN ? 'FIL' : 'tFIL', 'Filecoin')
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
