import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage'
import SobreNos from './pages/SobreNos'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home/'
import Login from './pages/Login'
import Senha from './pages/Senha'
import Header from './components/HeaderPrincipal'
import Modal from './components/ModalTarefa'
import Hoje from './pages/Hoje'

function MyRoutes() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/landingpage" element={<LandingPage/>} />
                    <Route path="/sobrenos" element={<SobreNos/>} />
                    <Route path='/cadastro' element={<Cadastro/>}/>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/senha' element={<Senha/>} />
                    <Route path='/home' element={<Home/>} />
                    <Route path='/header' element={<Header/>} />
                    <Route path='/modal' element={<Modal/>} />
                    <Route path='/hoje' element={<Hoje/>} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default MyRoutes;