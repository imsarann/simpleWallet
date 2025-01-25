import React from 'react'
import { GoLink } from "react-icons/go";
export default function NavBar() {
  return (
    <div className='bg-raisinBlack text-white h-[55px] w-auto'>
        <div className='flex justify-between'>
          <div className='py-[10px] px-[10px] mt-[7px]'>SIMPLE WALLET</div>
          <div className='px-[8px]   mx-[10px] my-[5px] bg-white text-raisinBlack rounded-full'>
              <div className='px-1 py-[10px] text-lg'>
                <GoLink size={20}/>
              </div>
          </div>
        </div>
    </div>
  )
}
