//-----------------------------------------------------------------------------------------------//
import { iterate } from '../utils/object';
import web3Clients from '../constants/web3Clients';
import address from './address'
import BN, { isBN } from './bn';
import value from './value'
import { isAddress } from '../utils/address';


//-----------------------------------------------------------------------------------------------//
export type txPayload = {
  /**
   * The nonce to use when signing this transaction.
   * @Default will use web3.eth.getTransactionCount().
   */
  nonce?: value
  /**
   * The chain id to use when signing this transaction.
   * @Default will use web3.eth.getChainId().
   * @Ignore Web3 will ignore this field if common.customChain.chainId is provided.
   */
  chainId?: string
  /**
   * The receiver of the transaction, can be empty when deploying a contract.
   */
  to?: address
  /**
   * The call data of the transaction, can be empty for simple value transfers.
   */
  data?: string
  /**
   * The value of the transaction in wei.
   */
  value?: value
  /**
   * The gas price set by this transaction, if empty, it will use web3.eth.getGasPrice().
   */
  gasPrice?: value
  /**
   * The maximum fee per gas that the transaction is willing to pay in total.
   * If gasPrice is also set, maxFeePerGas will be set equal to it, regardless of this value.
   * @Default (2 * block.baseFeePerGas) + maxPriorityFeePerGas
   */
  maxFeePerGas?: value
  /**
   * The max (priority) fee per gas to give miners to incentivize them to include the transaction.
   * If gasPrice is set, maxPriorityFeePerGas will be set equal to it, regardless of this value.
   * @Default 2.5 Gwei
   */
  maxPriorityFeePerGas?: value
  /**
   * The gas provided by the transaction.
   */
  gas: value
  /**
   * @Default to 'mainnet'.
   */
  chain?: string
  /**
   * @Default to 'berlin'.
   */
  hardfork?: string
  /**
   * The common object.
   */
  common?: {
    /**
     * The custom chain properties.
     */
    customChain: {
      /**
       * The name of the chain.
       */
      name?: string
      /**
       * Network ID of the custom chain.
       */
      networkId: value
      /**
       * Chain ID of the custom chain.
       */
      chainId: string
    }
    /**
     * mainnet, goerli, kovan, rinkeby, or ropsten.
     */
    baseChain?: string
    /**
     * chainstart, homestead, dao, tangerineWhistle, spuriousDragon,
     * byzantium, constantinople,petersburg, istanbul, or berlin.
     */
    hardfork?: string
  }
}


//-----------------------------------------------------------------------------------------------//
export type txReceipt = {
  blockHash: string;
  blockNumber: number;
  contractAddress: string | null;
  cumulativeGasUsed: number;
  from: string;
  gasUsed: number;
  logs: Array<{
    address: string;
    topics: Array<string>;
    data: string;
    blockNumber: number;
    transactionHash: string;
    transactionIndex: number;
    blockHash: string;
    logIndex: number;
    removed: boolean;
    id: string;
  }>;
  logsBloom: string;
  status: boolean;
  to: string;
  transactionHash: string;
  transactionIndex: number;
  type: '0x0' | '0x1';
}


//-----------------------------------------------------------------------------------------------//
interface signature {
  v: string
  r: string
  s: string
}


export class Tx {
  public chainId: string
  public payload: txPayload
  public signature?: signature
  public rawTransaction?: string
  public transactionHash?: string
  public messageHash?: string

  constructor(chainId: string, payload: txPayload) {
    this.chainId = chainId
    this.payload = payload
  }

  public async signTx(privateKey: string): Promise<void> {
    const {
      messageHash, v, r, s, rawTransaction, transactionHash,
    } = await web3Clients[this.chainId].eth.accounts
      .signTransaction(this.payload as any, privateKey)
    this.signature = { v, r, s }
    this.rawTransaction = rawTransaction
    this.transactionHash = transactionHash
    this.messageHash = messageHash
  }

  public async sendTx(): Promise<txReceipt> {
    if (!this.rawTransaction) throw "Error: cannot send, the Tx is not signed !"
    return web3Clients[this.chainId].eth
      .sendSignedTransaction(this.rawTransaction) as any
  }

  public async signAndSendTx(privateKey: string): Promise<any> {
    await this.signTx(privateKey)
    return await this.sendTx()
  }
}


//-----------------------------------------------------------------------------------------------//