// import Button from "./Button"
import Dashboard from "./Dashboard"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Wallet from "./Wallet"
import {SeedProvider }from "./SeedProvider"
import NavBar from "./NavBar"
function App() {

  return (
    <SeedProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/wallet" element={<Wallet/>} />
    </Routes>
    </BrowserRouter>
    </SeedProvider>
    
  )
}

export default App
