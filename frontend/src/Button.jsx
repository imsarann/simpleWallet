export default function Button({ text , onClickHandler }) {
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

