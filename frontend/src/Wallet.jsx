import React from 'react'
import { useLocation } from "react-router-dom";
export default function Wallet() {
    const location = useLocation();
    const { mnemonics } = location.state || {};
    console.log("heyhey", mnemonics)
  return (
    <div>
      <div className='w-full bg-gray-900 text-white text-[20px] py-5 px-10 display-inline' type="text">   
        {
        mnemonics.split(" ").map((mnemonic, index) =>{ 
            console.log("aayiram ",mnemonic);
            return (

                <div  key={index} className='text-white '>{ mnemonic.toUpperCase() } </div> 
            )
        
        })}
         </div>
    </div>
  )
}
