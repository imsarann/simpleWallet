// import Button from "./Button"
import Dashboard from "./Dashboard"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import {SeedProvider }from "./SeedProvider"
import NavBar from "./NavBar"
import MainWallet from "./MainWallet"
function App() {

  return (
    <SeedProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/wallet" element={<MainWallet/>} />
    </Routes>
    </BrowserRouter>
    </SeedProvider>
    
  )
}

export default App
