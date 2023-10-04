// Cadastro.js
import React, { Component } from 'react';
import './Cadastro.css'; // Importe o arquivo de estilos CSS

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Aqui, você pode adicionar lógica para lidar com o envio do formulário
    console.log(this.state); // Isso apenas exibe os dados do formulário no console
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

    render() {
    return (
      <div className="div-cadastro-pai">
        <div className="div-cadastro">
          <main className="main-cadastro">
            <form className="form-login form-cadastro" action="">
              <h2 className="h2-cadastro">CADASTRO</h2>
              <input className="inputs input-user" type="text" placeholder="NOME COMPLETO" required autoFocus />
              <input className="inputs input-email" type="email" placeholder="E-MAIL" required />
              <input className="inputs input-senha" type="password" placeholder="SENHA" required />
              <input className="inputs input-senha" type="password" placeholder="CONFIRME SUA SENHA" required />
              <div className="div-texto">
                <p className="p-login">JÁ POSSUI CADASTRO?</p>
                <a className="link-cadastro" href="login.html">Login!</a>
              </div>
              <div className="div-login-com">
                <button className="button-login-cadastro" type="submit">CADASTRAR</button>
              </div>
            </form>
          </main>
          <aside className="aside-cadastro">
            <div className="div-logo div-logo-cadastro">
              <a href="index.html">
                <img className="img-logo" src="assets/logo.png" alt="logo-lifeTidy" />
              </a>
            </div>
            <div className="div-recados-cadastro">
              <p className="p-cadastro">Viva de forma organizada,
                torne o seu dia a dia mais produtivo. <br />
                <br /> A organização é a chave para a
                produtividade.
              </p>
            </div>
            <div className="div-img-exibição">
              <img className="img-exibição" src="assets/exibição.jpg" alt="Imagem de Exibição" />
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

export default Cadastro;
