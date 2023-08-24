//-----------------------------------------------------------------------------------------------//
import { Contract as _contract } from 'web3-eth-contract';
import ABI from './abi';
import web3Clients from '../constants/web3Clients';
import BN, { isBN } from './bn';
import { Tx, txPayload } from './tx';
import async from './async';
import { DEFAULT_GAS } from '../constants/macros';


//-----------------------------------------------------------------------------------------------//
export default class Contract {
  public readonly chainId: string;
  public readonly address: string;
  public readonly abi: ABI;
  protected readonly instance: _contract;


  constructor(chainId: string, address: string, abi: ABI) {
    // TODO: validation utils like this.chainId = validate(chainId) return chainId or throw
    this.chainId = chainId;
    this.address = address; // TODO: validate address checksum
    this.abi = abi; // TODO: validate ABI
    this.instance = this.instanciate();
  }


  /**
   * return instance for given contract [address] & [ABI]
   */
  private instanciate(): _contract {
    // TODO: make web3 object validator
    // TODO: check explorer if given ABI and address correspond on chain
    // RESEARCH: can we grab ABI from address on chain ? prob not, maybe just compare byte codes
    return new web3Clients[this.chainId].eth.Contract(this.abi, this.address);
    // TODO: double check that contract is properly instanciated (match ChainId x Address x ABI)
  }


  /**
   * call contract method and return result
   */
  public async call(method: string, ...params: any[]): Promise<any> {
    return await this.instance.methods[method](...this.castParams(params)).call();
  }


  /**
   * prepare tx to execute contract method
   * @sync if gas is passed in txOptions
   * @async if gas is not passed, will try to estimate or use env default
   */
  public writeTx(method: string, params: any[], txOptions?: txPayload): Tx {
    const exec = this.instance.methods[method](...this.castParams(params))
    return new Tx(this.chainId, {
      to: this.address,
      data: exec.encodeABI(),
      gas: DEFAULT_GAS,
      ...txOptions,
    });
  }


  private castParams(params: any[]): any[] {
    return params.map(p => {
      if (typeof p == 'boolean')
        return p
      if (typeof p == 'object' && !isBN(p))
        return this.castParams(Object.values(p))
      // else
      return String(p)
    })
  }
}


//-----------------------------------------------------------------------------------------------//