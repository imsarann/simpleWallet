import { generateMnemonic } from "bip39";
// import { useState } from "react";
import { useNavigate } from "react-router-dom" 

export default function Button({text}) {
    // const [Mnemonic, setMnemonic] = useState("");
    const navigate = useNavigate();
    const onClickHandler = async () => {
        const mn = await generateMnemonic();
        console.log("🚀 ~ onClickHandler ~ mn:", mn)
        // setMnemonic(mn);
        console.log("Hellowawdg");
        console.log("Hellow" , mn);
        navigate("/wallet", { state : { mnemonics : mn } })
    }
  return (
    <div>
      <button className='inline-block rounded-[4px] text-white text-center text-[17px]
      p-[10px] w-[130px] cursor-pointer m-[5px] bg-gray-900'  aria-placeholder='Summit' onClick={onClickHandler}>{text}</button>
    </div>
  )
}
