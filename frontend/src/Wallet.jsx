import React, { useContext, useState } from 'react'
import Box from './Box';
import List from './List';
import Button from './Button';
import { mnemonicToSeed } from 'bip39';
import { SeedContext } from './SeedProvider';
import { Keypair } from "@solana/web3.js";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl"
export default function Wallet() {
  const decoder = new TextDecoder('utf-8');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [publicKeys, setPublicKeys] = useState([]);
  const  [secret, setSecret] = useState();
  const { seed }  = useContext(SeedContext);
    const solanaButton = async () => {
      console.log("Heloooooooooooooo");
         const NewSeed = await mnemonicToSeed(seed);
         const path = `m/44'/501'/${currentIndex}'/0'`;
         const derivedSeed = derivePath(path, NewSeed.toString("hex")).key;
         const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;

         //  const decodedText = decoder.decode(secret);

        //  console.log("🚀 ~ solanaButton ~ secret:", decodedText)
         const keypair = Keypair.fromSecretKey(secret);
         setCurrentIndex(currentIndex + 1);
         setPublicKeys([...publicKeys, keypair.publicKey]) 
         console.log("Public Key",publicKeys.map(p =>{ return p.toBase58()}));
    }
  return (
    <div >
      <div >Your Mnemonic Seeds</div>
      <div className='flex justify-center mt-[30px]'>
        <Box/>
      </div>
        <hr class="border-color1 my-4" />
        <div className="flex flex-row">
        <Button text={"Solana"}  onClickHandler={solanaButton}/>
        <Button text={"Ethereum"} onClickHandler={solanaButton}/>

        </div>
        <hr class="border-color1 my-4" />        
        <List publicKey={publicKeys}  coin={"SOLANA"}/> 
    </div>
  )
}
