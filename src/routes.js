import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import SobreNos from './pages/SobreNos'
import Cadastro from './pages/Cadastro'
//import Home from './pages/Home/'
import Login from './pages/Login'

function MyRoutes() {

    return (
        <Router>
            <Routes>
                <Route path="/landingpage" element={<LandingPage/>} />
                <Route path="/sobrenos" element={<SobreNos/>} />
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/login' element={<Login/>} />
            </Routes>

        </Router>)
}
export default MyRoutes