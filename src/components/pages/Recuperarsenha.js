import React from 'react';
import './Global.css';
import Logo from'../img/logo.png';

function Recuperarsenha() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.querySelector('.input-email').value;
    if (email !== '') {
      // Redirecionar para a página de e-mail enviado (você pode usar o React Router para isso)
      // Exemplo: history.push('/emailEnviado');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="div-cadastro-pai">
      <div className="div-cadastro">
        <main className="main-cadastro">
          <form className="form-login form-cadastro" onSubmit={handleSubmit}>
            <h2 className="h2-cadastro">RECUPERAR SENHA</h2>

            <input
              className="inputs input-email"
              type="email"
              placeholder="DIGITE O E-MAIL CADASTRADO"
              required
            />
            <input
              className="inputs input-email input-email-recuperacao"
              type="email"
              placeholder="CONFIRME SEU E-MAIL"
              required
            />

            <div className="div-texto"></div>
            <div className="div-login-com">
              <button className="button-login-cadastro" type="submit">
                RECUPERAR
              </button>
            </div>
          </form>
        </main>
        <aside className="aside-cadastro aside-cadastro-recuperacao">
          <div className="div-logo div-logo-cadastro">
            <a href="index.html">
              <img className="img-logo" src={Logo} alt="logo-lifeTidy" />
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Recuperarsenha;
