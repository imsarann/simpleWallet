import React, { useContext, useState } from 'react'
import Box from './Box';
import List from './List';
import Button from './Button';
import { mnemonicToSeed } from 'bip39';
import { SeedContext } from './SeedProvider';
import { Keypair } from "@solana/web3.js";
import { derivePath } from "ed25519-hd-key";
import { Wallet, HDNodeWallet } from "ethers";
import nacl from "tweetnacl"
export default function MainWallet() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [publicKeys, setPublicKeys] = useState([]);
  const { seed }  = useContext(SeedContext);
  const [curretIndexEth, setCurretIndexEth] = useState(0);
  const [coin , setCoin] = useState(false); 
  const [addresses, setAddresses] = useState([]);
    const solanaButton = async () => {
         const NewSeed = await mnemonicToSeed(seed);
         const path = `m/44'/501'/${currentIndex}'/0'`;
         const derivedSeed = derivePath(path, NewSeed.toString("hex")).key;
         const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;


         const keypair = Keypair.fromSecretKey(secret);
         setCurrentIndex(currentIndex + 1);
         setPublicKeys([...publicKeys, keypair.publicKey]) 
        //  console.log("Public Key",publicKeys.map(p =>{ return p.toBase58()}));
    }
    const ethButton = async () =>{
      const newSeed = await mnemonicToSeed(seed);
      const derivationPath = `m/44'/60'/${curretIndexEth}'/0'`;
      const hdNode = HDNodeWallet.fromSeed(newSeed);
      const child = hdNode.derivePath(derivationPath);
      const privateKey = child.privateKey;
      const wallet = new Wallet(privateKey);
      setCurretIndexEth(curretIndexEth + 1);
      setAddresses([...addresses, wallet.address]);
      console.log("Public Key",addresses.map(p =>{ return p.toBase58()}));

    }
    
  return (
    <div >
      <div >Your Mnemonic Seeds</div>
      <div className='flex justify-center mt-[30px]'>
        <Box/>
      </div>
        <hr class="border-color1 my-4" />
        <div className="flex flex-row jus">
        <Button text={"Solana"}  onClickHandler={()=>{
          console.log("solana")
          setCoin(false);
        }}/>
        <Button text={"Ethereum"} onClickHandler={()=>{
          console.log("etherium")
          setCoin(true);
        }}/>
        <div>
        <Button text={"Create Wallet"} onClickHandler={coin ? ethButton : solanaButton}/>
        </div>
        </div>
        <hr class="border-color1 my-4" />        
        <List publicKey={coin ? addresses: publicKeys }  coin={coin ? true : false}/> 
    </div>
  )
}
