import React from 'react'

export default function List({privateKey, publicKey,  coin }) {
    
  return (
    <div className="w-full bg-raisinBlack text-white text-28px p-2 ">
        <div className='font-bold'>{coin}</div>
        <div> {publicKey}</div>
        <div> {privateKey}</div>
    </div>
  )
}
