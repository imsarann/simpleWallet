import React from 'react'
import Button from './Button'
import InputBox from './InputBox'

// const SeedContext = createContext(defaultValue)

function Dashboard() {

  return (
    <div >
      <Button text={"Generate seed phrase"}/>
      <InputBox  text={"Enter your 12 word seeds if you have already"} />

    </div>
  )
}

export default Dashboard
