//-----------------------------------------------------------------------------------------------//
import Networks from '../networks';
import arbTokens from './arbitrum.json';
import bscTokens from './bsc.json';
//import ethTokens from './ethereum.json';
import polyTokens from './polygon.json';
import listedToken from '../../types/listedToken';


//-----------------------------------------------------------------------------------------------//
export default <{ [chainId: string]: listedToken[] }>{
  [Networks.arbitrum.chainId]: arbTokens,
  //[Networks.bsc.chainId]: bscTokens,
  //[Networks.ethereum.chainId]: ethTokens,
  //[Networks.polygon.chainId]: polyTokens,
};


//-----------------------------------------------------------------------------------------------//