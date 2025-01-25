import React from 'react'
import Button from './Button'
import InputBox from './InputBox'
import { generateMnemonic } from "bip39";
import { useContext } from "react";
import { useNavigate } from "react-router-dom" 
import { SeedContext }from "./SeedProvider";

function Dashboard() {
  const navigate = useNavigate();
  const {Seed , setSeed } = useContext(SeedContext);

  
  const buttonOnClickHandler = async () => {
    try{
        const mn = await generateMnemonic();
        console.log("🚀 ~ onClickHandler ~ mn:", mn);
        setSeed(mn);
        console.log("Seed : ", Seed)
        navigate("/wallet")
      }catch(error) {
        console.error('Error generating seed phrase:', error);
      }
    }

  return (
    <div >
      <div className="flex flex-col items-center space-y-4 m-[250px]">
      <Button text={"Generate seed phrase"} onClickHandler={buttonOnClickHandler}/>
      <InputBox  text={"  Enter your 12 word seeds if you have already"} />
      </div>

    </div>
  )
}

export default Dashboard
