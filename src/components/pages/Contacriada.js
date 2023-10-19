import React from 'react';
import Logo from '../img/logo.png'; // Importe o caminho correto para a imagem do logotipo
import './Global.css'; // Se você tiver estilos CSS para esta página

function contaCriada() {
    return (
      <main className="main-login main-contaCriada">
        <div className="form-login div-recuperacao-senha">
          <div className="div-logo div-logo-recuperacao">
            <a href="index.html">
              <img className="img-logo img-logo-recuperacao" src={Logo} alt="logo-lifeTidy" />
            </a>
          </div>

          <div className="container-informacoes-concluidas-modal">
            <i className="fas fa-medal"></i>
            <h2 className="h2-parabens">PARABÉNS!</h2>
            <p className="p-informacoes-desempenho p-contaCriada">CONTA CRIADA COM SUCESSO!</p>
          </div>
          <div className="div-texto">
            <a className="link-button-voltar" href="login.html">VAMOS LÁ</a>
          </div>
        </div>
      </main>
    );
  }
  
  export default contaCriada;
  