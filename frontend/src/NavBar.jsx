import React from 'react'

export default function NavBar() {
  return (
    <div className='bg-raisinBlack text-white h-[45px]'>
        <div className='flex justify-between'>
        <div className='py-[10px] px-[10px]'>SIMPLE WALLET</div>
            <div className='px-[10px]  mx-[8px] my-[2px] bg-white text-raisinBlack rounded-full'>
                <div className='px-1 py-[5px] text-lg'>X</div>
            </div>
        </div>
    </div>
  )
}
