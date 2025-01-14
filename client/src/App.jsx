import './App.css'
import { Route, Routes } from "react-router-dom"
import {Navbar,Appoitment,Doctors,Home, Dashbord, Login} from './index'
// import Home from './pages/Home'

function App() {

   return <>
   <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/appointment" element={<Appoitment />} />
         <Route path="/doctor" element={<Doctors />} />
         <Route path="/dashbord" element={<Dashbord />} />
         <Route path="/login" element={<Login />} />
      </Routes>
   </>
}
export default App
