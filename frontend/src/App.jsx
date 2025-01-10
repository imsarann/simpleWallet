// import Button from "./Button"
import Dashboard from "./Dashboard"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Wallet from "./Wallet"
function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/wallet" element={<Wallet/>} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
