import React from 'react'

export default function List({privateKey, publicKey,  coin }) {
    
  return (
    <div className="w-full bg-nyanza text-black text-28px border ">
        <div className='font-bold'>{coin}</div>
        <div> {publicKey}</div>
        <div> {privateKey}</div>
    </div>
  )
}
