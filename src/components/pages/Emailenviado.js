import React from 'react';
import logo from '../img/logo.png'; // Importe o caminho correto para a imagem do logotipo
import './Global.css'; // Se você tiver estilos CSS para esta página

function Emailenviado() {
    return (
      <main className="main-login">
        <div className="form-login div-recuperacao-senha">
          <div className="div-logo div-logo-recuperacao">
            <a href="index.html">
              <img className="img-logo img-logo-recuperacao" src={logo} alt="logo-lifeTidy" />
            </a>
          </div>
          <h2 className="h2-cadastro h2-cadastro-recuperacao">RECUPERAR SENHA</h2>
          <p className="p-email-recuperacao">UM LINK FOI ENCAMINHADO PARA SEU E-MAIL! <br></br> ACESSE-O PARA RECUPERAR SUA SENHA</p>
          <div className="div-texto">
            <a className="link-button-voltar" href="login.html">VOLTAR</a>
          </div>
        </div>
      </main>
    );
  }
  
  export default Emailenviado;
  