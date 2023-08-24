//-----------------------------------------------------------------------------------------------//
import Web3 from 'web3';
import Networks from './networks';

//-----------------------------------------------------------------------------------------------//
const Web3Clients: { [chainId: string]: Web3 } = {
  [Networks.arbitrum.chainId]: new Web3('https://rpc.ankr.com/arbitrum'),
  //[Networks.bsc.chainId]: new Web3('https://rpc.ankr.com/bsc'),
  //[Networks.polygon.chainId]: new Web3('https://rpc.ankr.com/polygon'),
};

//-----------------------------------------------------------------------------------------------//
export default Web3Clients;

//-----------------------------------------------------------------------------------------------//
