import React from 'react'
import { GoLink } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className='bg-raisinBlack text-white h-[55px] mx-auto'>
        <div className='flex justify-between'>
          <div className='py-[10px] px-[10px] mt-[7px]' onClick={() =>{
            navigate("/")
          }}>SIMPLE WALLET</div>
          <div className='px-[8px]   mx-[10px] my-[5px] bg-white text-raisinBlack rounded-full'>
              <div className='px-1 py-[10px] text-lg'>
                <GoLink size={20}/>
              </div>
          </div>
        </div>
    </div>
  )
}
