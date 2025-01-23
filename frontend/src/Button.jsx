import { generateMnemonic } from "bip39";
import { useContext } from "react";
import { useNavigate } from "react-router-dom" 
import { SeedContext }from "./SeedProvider";

export default function Button({ text }) {
  const navigate = useNavigate();
  const {Seed , setSeed } = useContext(SeedContext);
  const onClickHandler = async () => {
    const mn = await generateMnemonic();
    console.log("🚀 ~ onClickHandler ~ mn:", mn);
    setSeed(mn);
    console.log("Seed : ", Seed)
    navigate("/wallet");
  };

  return (
    <div>
      <button
        className="inline-block rounded-[4px] text-white text-center text-[17px]
        p-[10px] w-[130px] cursor-pointer m-[5px] bg-raisinBlack"
        aria-placeholder="Summit"
        onClick={onClickHandler}
      >
        {text}
      </button>
    </div>
  );
}

