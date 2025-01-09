import Login from "./components/Login"
import {Routes,Route} from "react-router-dom"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import { useState } from "react"

function App() {
 const [token,setToken] =useState("");
 console.log(token);
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Signup  token={token} setToken={setToken}/>}/>
      <Route path="/login" element={<Login token={token} setToken={setToken}/>}/>
      <Route path="/dashboard" element={<Dashboard token={token} />}/>
    </Routes>
    </>
  )
}

export default App
