import React from 'react';
import './pages/Global.css'; 
import Logo from './img/logo.png'

function Header() {
  return (
    <header className="header-tela-inicial">
      <div className="div-logo-header div-logo-header-home">
        <a href="home.html">
          <div className="img-logo-home">
          <img className="img-logo" src={Logo} alt="logo-lifeTidy" />
          </div>
         
        </a>
      </div>
      <div className="div-buttons">
        <input className="inputs input-pesquisa" type="text" placeholder="PESQUISAR" />
        <div className="div-buttons-modal">
          <button className="button-login button-login-home button-adicionar"></button>
          <button className="button-login button-login-home button-aviso"></button>
          <button className="button-login button-login-home button-desempenho"></button>
        </div>
      </div>
      <div className="div-perfil">
        <p className="p-nome-usuario">Nome Usuario</p>
        <div className="div-img-perfil">
          <a className="link-perfil" href="#">
            <img className="img-perfil" src="assets/perfil.png" alt="logo-perfil" />
          </a>
          <div className="sub-menu-header">
            <a href="">EDITAR PERFIL</a>
            <a href="">CONFIGURAÇÕES</a>
            <a href="index.html">SAIR</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
