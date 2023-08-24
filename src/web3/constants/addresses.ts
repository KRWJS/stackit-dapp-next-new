//-----------------------------------------------------------------------------------------------//
import Contracts from './contracts'
import Networks from './networks'
import address from '../types/address'


//-----------------------------------------------------------------------------------------------//
const Addresses: {
  [name in Contracts]: { [chainId: string]: address }
} = {
  [Contracts.Stackit]: {
    [Networks.arbitrum.chainId]: '0x468B4d92ff0919bb8081b330b1fA44d0065bcC95',
    //[Networks.bsc.chainId]: '0x848109AcBD6EFD1acF4521aCDc78Cb8b4A19f99e',
    //[Networks.ethereum.chainId]: '0xf48Dc697cADE710a34854C162717CFFC4401A5BE',
    //[Networks.polygon.chainId]: '0x6398d4e1046A4e18DeC7089B59Cc0F56001569f2',
  },
  //[Contracts.ReferralFeesAggregatorV3]: {
  //[Networks.arbitrum.chainId]: '0x1e7Dff9E134Ce21d3D5b5698d196F06f925b0EfD',
  //[Networks.bsc.chainId]: '0x8FE5338c514Ccbe69bB02bC204943D2098C9dd3a',
  //[Networks.ethereum.chainId]: '0x243255479f8bb4e2c1A690Fed556F191BCF67aD2',
  //[Networks.polygon.chainId]: '0x9289a647FC4dD8Dd394E60eB8C292cD8cafe4A8B',
  //},
  //[Contracts.StackitReferralV3]: {
  //[Networks.arbitrum.chainId]: '0x46F2939E8f9A0cE2f881a587aaD8FAA3320BBF5E',
  //[Networks.bsc.chainId]: '0x51099E1b1f598D1C70f50d969C808afc73Cd42De',
  //[Networks.ethereum.chainId]: '0x61D92708eb41b070361A355e6fA0546B6f315003',
  //[Networks.polygon.chainId]: '0x0aEDdD1a2229fd119AC73fb37b81545546AF80Bd',
  //},
}


//-----------------------------------------------------------------------------------------------//
export default Addresses


//-----------------------------------------------------------------------------------------------//