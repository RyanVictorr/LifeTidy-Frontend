

import Header from '../Header';
import 'font-awesome/css/font-awesome.min.css';
import Menu from '../Menu';


function Estudo() {


  return (
    <div>
    <Header />
   
     <div className="main-principal">
     <Menu/>
     
      <div id="calendar" style={{ display: 'none' }}></div>
      <main className="main-tela-principal">
        <div className="div-container-buttons-adicao">
          <a className="links-buttons-adicao links-buttons-adicao-marcador">
            <i className="fas fa-plus"></i> ADICIONAR MARCADOR
          </a>
          <a className="links-buttons-adicao">
            <i className="fa fa-th-list"></i> TODOS OS MARCADORES
          </a>
        </div>
      </main>
    
   </div>
   </div>
 
 );
}


export default Estudo;
