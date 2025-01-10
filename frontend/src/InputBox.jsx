import React from 'react'

export default function InputBox({text}) {
  return (
    <div>
      <input className='border-gray-600 rounded-[5px] shadow-md border-2 w-[600px] h-[40px]' placeholder={text}></input>
    </div>
  )
}
