import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
export default function List({ publicKey, coin }) {
  const [isClicked, setIsClicked] = useState(false);
  const dot = "********************************"
  return (
    <div>
    {
      publicKey.map((pk, index)=> {
      return <div>
      <div className="w-full bg-raisinBlack text-white text-28px p-2 rounded-md ml-3 mt-[20px]">
      <div className="font-bold">Wallet {index}</div>
      <div>
        <div>
          <div>PUBLIC KEY :</div>
          <div className="bg-white text-black p-[8px] rounded-md">
            {" "}
            {pk.toBase58()}{" "}
          </div>
          <div className="mt-1">PRIVATE KEY :</div>
          <div className="bg-white text-black p-[8px] rounded-md mt-1 flex flex-row">
            {isClicked ? (
              <IoEyeOff
                className="mx-2"
                size={24}
                color="black"
                onClick={() => setIsClicked(!isClicked)}
              />
            ) : (
              <IoEye
                className="mx-2"
                size={24}
                color="black"
                onClick={() => setIsClicked(!isClicked)}
              />
            )}
            {dot}
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
