//-----------------------------------------------------------------------------------------------//
import ABIs from '../ABIs';
import ABI from './abi';
import address from './address';
import BN from './bn';
import Contract from './contract';
import { Tx } from './tx';
import _ from 'lodash';
import value from './value';


//-----------------------------------------------------------------------------------------------//
class ERC20 extends Contract {
  public _name: string = null as any;
  public _symbol: string = null as any;
  public _decimals: BN = null as any;
  public _totalSupply: BN = null as any;

  constructor(chainId: string, address: address, abi: ABI = ABIs.ERC20) {
    super(chainId, address, abi);
  }

  public static async new(chainId: string, address: address): Promise<ERC20> {
    return await new ERC20(chainId, address).refresh();
  }

  public async refresh(): Promise<ERC20> {
    await this.name();
    await this.symbol();
    await this.decimals();
    await this.totalSupply();
    return this;
  }

  public async name(): Promise<string> {
    this._name = await this.call('name');
    return this._name;
  }

  public async symbol(): Promise<string> {
    this._symbol = await this.call('symbol');
    return this._symbol;
  }

  public async decimals(): Promise<BN> {
    this._decimals = new BN(await this.call('decimals'));
    return this._decimals;
  }

  public async totalSupply(): Promise<BN> {
    this._totalSupply = new BN(await this.call('totalSupply'));
    return this._totalSupply;
  }

  public async getAllowance(owner: address, spender: address): Promise<BN> {
    return new BN(await this.call('allowance', owner, spender));
  }

  public setAllowance(spender: string, amount: BN): Tx {
    return this.writeTx('approve', [spender, amount]);
  }

  public transfer(to: string, amount: value): Tx {
    return this.writeTx('transfer', [to, amount]);
  }

  public async balanceOf(account: address): Promise<BN> {
    return new BN(await this.call('balanceOf', account));
  }
}


//-----------------------------------------------------------------------------------------------//
export default ERC20


//-----------------------------------------------------------------------------------------------//