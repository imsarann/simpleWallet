import React from 'react'
import Box from './Box';
import List from './List';

export default function Wallet() {

    const onClickHandel = () =>{
         
    }
  return (
    <div >
      <div >Your Mnemonic Seeds</div>
        <Box /> 
        <button onClick={onClickHandel}>
          Create solana 
        </button>
        <List publicKey={"akgkjsnakjdsgfnnlkasjdbgbkasjbdgbkasjgaskldjg"} privateKey={"akgkjsnakjdsgfnnlkasjdbgbkasjbdgbkasjgaskldjg"} coin={"SOLANA"}/>         
    </div>
  )
}
