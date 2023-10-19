import React, { Component } from 'react';
import './Global.css'; 
import Logo from '../img/logo.png'

 // Certifique-se de criar um arquivo CSS correspondente, se necessário.

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, senha } = this.state;
    console.log('Email:', email);
    console.log('Senha:', senha);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <main className="main-login">
      <form className="form-login" action="">
        <div className="div-logo">
          <a href="index.html">
            <img className="img-logo" src={Logo} alt="logo-lifeTidy" />
          </a>
        </div>
        <div className="div-inputs-login">
          <input className="inputs input-email" type="email" placeholder="E-MAIL" required autoFocus />
          <input className="inputs input-senha input-senha-login" type="password" placeholder="SENHA" required />
        </div>
        <div className="div-texto div-texto-sem-borda">
          <p className="p-login p-esqueceu-senha">ESQUECEU A SENHA?</p>
          <a className="link-cadastro" href="recuperarSenha.html">Recuperar</a>
        </div>
        <button className="button-login-cadastro" type="submit">LOGIN</button>
        <div className="div-texto">
          <p className="p-login">NÃO TEM CADASTRO?</p>
          <a className="link-cadastro" href="cadastro.html">Inscreva-se</a>
        </div>
      </form>
    </main>
    );
  }
}

export default Login;
