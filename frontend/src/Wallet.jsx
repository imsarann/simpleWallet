import React from 'react'
import { useLocation } from "react-router-dom";
import Box from './Box';
import List from './List';
export default function Wallet() {
    const location = useLocation();
    const { mnemonics } = location.state || {};
    console.log("heyhey", mnemonics)
  return (
    <div className='bg-gray-950'>
      <div className='text-white'>Your Mnemonic Seeds</div>
      {/* <div className='w-full bg-gray-900 text-white text-[20px] py-5 px-10 grid grid-cols-6' type="text">    */}
        <Box contents={mnemonics}/> 
        <List publicKey={"akgkjsnakjdsgfnnlkasjdbgbkasjbdgbkasjgaskldjg"} privateKey={"akgkjsnakjdsgfnnlkasjdbgbkasjbdgbkasjgaskldjg"} coin={"SOLANA"}/>
         {/* </div> */}
         
    </div>
  )
}
