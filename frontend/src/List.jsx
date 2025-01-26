import React, { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
export default function List({ publicKey, coin }) {
  const [isClicked, setIsClicked] = useState(false);
  const dot = "********************************"
  return (
    <div>
    {
      publicKey.map((pk, index)=> {
      return <div>
      <div className="w-auto bg-raisinBlack text-white text-28px p-2 rounded-md mx-3 mt-[20px]">
      <div className="font-bold">Wallet {index + 1}</div>
      <div>
        <div>
          <div>PUBLIC KEY :</div>
          <div className="bg-white text-black p-[8px] rounded-md">
            {" "}
            {coin ? pk : pk.toBase58()}{" "}
          </div>
          <div className="mt-1">PRIVATE KEY :</div>
          <div className="bg-white text-black p-[8px] rounded-md mt-1 flex flex-row">
            <MdOutlineContentCopy />
            {" "+dot}
          </div>
        </div>
      </div>
    </div>
      </div>
      
    })

    }
    </div>
    
  );
}
