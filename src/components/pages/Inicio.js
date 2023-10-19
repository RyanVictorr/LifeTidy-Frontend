import React from 'react';
import './Global.css'; 
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Logo from '../img/logo.png'
import imgLandingPage from '../img/img-landingPage.png';
import imgAdicionar from '../img/adicionar.png';
import imgExcluir from '../img/excluir.png';
import imgNotificacoes from '../img/notificacoes.png';
import imgRendimento from '../img/rendimento.png';
import imgAdicionarTarefaWiki from '../img/adicionarTarefaWiki.png';
import imgAdicionarTarefa from '../img/adicionarTarefa.png';
import imgNotificacoesWiki from '../img/notificacoesWiki.png';
import imgNotificacoesIndex from '../img/notificacoesIndex.png';
import imgInformaticoDeRendimento from '../img/INFORMATICO DE RENDIMENTO.png';
import imgAdicionarMarcador from '../img/ADICIONAR MARCADOR.png';


function Inicio() {
  return (
    <Router>
    <div className="body-tela-apresentacao">
      <header className="header-tela-apresentacao">
        <nav className="nav-apresentacao">
          <div className="div-nav-apresentacao">
            <div className="div-logo-header div-logo-header-apresentacao">
              <a href="index.html">
                <img className="img-logo" src={Logo} alt="logo-lifeTidy" />
              </a>
            </div>
            <a className="link-nav-tela-apresentacao links-none" href="sobreNois.html">
              SOBRE NÓS
            </a>
          </div>
          <div className="div-nav-apresentacao">
          <Link to="/cadastro" className="link-nav-tela-apresentacao">
                CADASTRO
              </Link>
              <Link to="/login" className="link-nav-tela-apresentacao login-apresentacao">
                LOGIN
              </Link>
          </div>
        </nav>
      </header>
    
      
      <main>
      <div className="container-principal">
        <div className="texts-apresentacao">
          <h1 className="h1-text-apresentacao">ORGANIZE SUA ROTINA COM O LIFETIDY</h1>
          <p className="p-text-apresentacao">ALCANCE O FOCO E O CONTROLE DA SUA AGENDA</p>
        </div>
        <div className="container-divs">
          <img className="img-exibicao-tela-inicial" src={imgLandingPage} alt="exibicaoTelaInicial" />
        </div>
        <div className="div-informacoes">
          <h2 id="pontoOne" className="h2-informacoes">COM LIFETIDY VOCÊ PODE FAZER MAIS!</h2>
          <div className="div-todas-informacoes">
            <div className="div-informacoes-left-right">
              <div className="div-informacoes-com-icones">
                <img className="icons-apresentacao" src={imgAdicionar} alt="icone-adicionar" />
                <p className="texts-informacoes">
                  ADICIONE DIVERSAS TAREFAS, QUANTAS VEZES FOREM NECESSÁRIAS,
                  PERSONALIZANDO AS CATEGORIAS DE ACORDO COM A NECESSIDADE.
                </p>
              </div>
              <div className="div-informacoes-com-icones">
                <img className="icons-apresentacao" src={imgExcluir} alt="icone-excluir" />
                <p className="texts-informacoes">
                  QUE TAL EXCLUIR TAREFAS QUE NÃO SERÃO FEITAS? COM A OPÇÃO
                  “EXCLUIR TAREFA”, VOCÊ OTIMIZA AO MÁXIMO SUA LISTA DE TAREFAS.
                </p>
              </div>
            </div>
            <div className="div-informacoes-left-right">
              <div className="div-informacoes-com-icones">
                <img className="icons-apresentacao" src={imgNotificacoes} alt="icone-notificações" />
                <p className="texts-informacoes">
                  ESQUECEU DO SEU COMPROMISSO OU DA SUA TAREFA? A GENTE TE
                  LEMBRA! COM NOTIFICAÇÕES INTERNAS E EM POP UP, ESQUECER NÃO SERÁ PROBLEMA.
                </p>
              </div>
              <div className="div-informacoes-com-icones">
                <img className="icons-apresentacao" src={imgRendimento} alt="icone-rendimento" />
                <p className="texts-informacoes">
                  QUER SABER O SEU RENDIMENTO PESSOAL? AQUI A GENTE TE MOSTRA,
                  COM GRÁFICOS DE RENDIMENTO SOBRE TAREFAS PENDENTES, FINALIZADAS E A FAZER, VOCÊ VERÁ OS
                  RESULTADOS EM PRIMEIRA MÃO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-tarefas">
        <h2 className="h2-informacoes">ADICIONE TAREFAS DE MANEIRA FÁCIL E RÁPIDA!</h2>
        <div className="div-todas-informacoes">
          <div className="div-todas-informacoes-tarefas-left">
            <ul>
              <li className="texts-informacoes-listas">PERSONALIZE SUAS TAREFAS USANDO A SELEÇÃO DE CATEGORIAS E
                GRAU DE IMPORTÂNCIA.</li>
              
              <li className="texts-informacoes-listas">DEFINA PRAZOS PRECISOS PARA SUAS TAREFAS, UTILIZANDO A DATA
                E HORA DESEJADAS.</li>
            </ul>
            <img className="img-exemplo-adicionar-tarefa-wiki" src={imgAdicionarTarefaWiki}
              alt="Imagem-exemplo-adicionar-tarefa-wiki" />
          </div>
          <div className="div-todas-informacoes-tarefas-right">
            <img className="img-exemplo-adicionar-tarefa" src={imgAdicionarTarefa}
              alt="Imagem-exemplo-adicionar-tarefa" />
          </div>
        </div>
      </div>

      <div className="container-notificacoes">
        <h2 className="h2-informacoes">INTERFACE DE NOTIFICAÇÕES DE FÁCIL COMPREENSÃO!</h2>
        <div className="div-todas-informacoes">
          <div className="div-todas-informacoes-tarefas-left">
            <ul>
              <li className="texts-informacoes-listas">NOTIFICAÇÕES ORDENADAS DE ACORDO COM O GRAU DE URGÊNCIA OU
                DATA.</li>
              
              <li className="texts-informacoes-listas">INTERFACE INTUITIVA, AMIGÁVEL E DE FÁCIL ENTENDIMENTO.</li>
            </ul>
            <img className="img-exemplo-adicionar-tarefa-wiki" src={imgNotificacoesWiki}
              alt="Imagem-exemplo-adicionar-tarefa-wiki" />
          </div>
          <div className="div-todas-informacoes-tarefas-right">
            <img className="img-exemplo-adicionar-tarefa" src={imgNotificacoesIndex}
              alt="Imagem-exemplo-adicionar-tarefa" />
          </div>
        </div>
      </div>

      <div className="container-informativo-redimento">
        <h2 className="h2-informacoes">TENHA ACESSO AO SEU INFORMATIVO DE RENDIMENTOS</h2>
        <div className="div-todas-informacoes">
          <div className="div-todas-informacoes-tarefas-left">
            <div className="div-texts-informacoes-listas">
              <ul>
                <li className="texts-informacoes-listas">PERSONALIZE SUAS TAREFAS USANDO A SELEÇÃO DE CATEGORIAS
                  E GRAU DE IMPORTÂNCIA.</li>
                
                <li className="texts-informacoes-listas">DEFINA PRAZOS PRECISOS PARA SUAS TAREFAS, UTILIZANDO A
                  DATA E HORA DESEJADAS.</li>
              </ul>
            </div>
          </div>
          <div className="div-todas-informacoes-tarefas-right">
            <img className="img-exemplo-adicionar-tarefa" src={imgInformaticoDeRendimento}
              alt="Imagem-exemplo-adicionar-tarefa" />
          </div>
        </div>
      </div>

      <div className="container-notificacoes container-marcadores">
        <h2 className="h2-informacoes">ADICIONE MARCADORES E GERÊNCIE SUAS TAREFAS!</h2>
        <div className="div-todas-informacoes">
          <div className="div-todas-informacoes-tarefas-left">
            <ul>
              <li className="texts-informacoes-listas">ADICIONE TAREFAS DE ACORDO COM A SUA NECESSIDAE, AGRUPE E
                SEPARE DE FORMA RÁPIDA E FÁCIL.</li>
              
              <li className="texts-informacoes-listas">DEFINA PRAZOS PRECISOS PARA SEUS MARCADORES, UTILIZANDO A
                DATA E HORA DESEJADAS.</li>
            </ul>
          </div>
          <div className="div-todas-informacoes-tarefas-right">
            <img className="img-exemplo-adicionar-tarefa" src={imgAdicionarMarcador}
              alt="Imagem-exemplo-adicionar-tarefa" />
          </div>
          <div className="div-texts-informacoes-listas">
            <h2>O QUE SÃO MARCADORES?</h2>
            <p>MARCADORES SÃO COMO UMA ESPÉCIE DE TÍTULO, NA QUAL O USUÁRIO PODE SEPARAR SUAS TAREFAS, A FIM DE
              ORGANIZAR-SE MELHOR.
              UM MARCADOR PODE SER O NOME DE UMA MATÉRIA, DE UM CURSO OU QUALQUER NOMECLATURA QUE FACILITE A
              SEPARAÇÃO DAS TAREFAS
              (EX: ATIVIDADES DE MATEMÁTICA, ATIVIDADES DA SEMANA, CSS, POO ETC.)
            </p>
          </div>
        </div>
      </div>

      </main>
      <footer className="footer-lifetidy">
        <div className="container-footer">
          <div className="footer-top">
            <div className="footer-logo">
              <img classname="img-logo" src={Logo} alt="LifeTidy Logo" />
            </div>
            <div className="footer-links">
              <ul>
                <li>
                  <a href="index.html">Página Inicial</a>
                </li>
                <li>
                  <a href="#pontoOne">Recursos</a>
                </li>
                <li>
                  <a href="sobreNois.html">Sobre Nós</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Todos os direitos reservados &copy; 2023 LifeTidy</p>
          </div>
        </div>
      </footer>
    </div>
    </Router>
  );
}

export default Inicio;
