import React from 'react';
import Header from '../Header';
import 'font-awesome/css/font-awesome.min.css';
import { FaCalendar } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaCalendarMinus } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';


function Estudo() {
  return (
    <div>
    <Header />
   
     <div className="main-principal">
     <div className="div-lateral">
       <nav className="nav-lateral">
         <div className="menu-btn">
           <i className="fas fa-bars"></i>
         </div>
         <div className="side-bar active">
           <div className="close-btn">
             <i className="fas fa-times"></i>
           </div>
           <div className="menu">
             <div className="item">
               <a href="home.html">
               <FaHome /> INICIO
               </a>
             </div>
             <div className="item">
               <a href="hoje.html">
               <FaCalendar /> HOJE
               </a>
             </div>
             <div className="item ">
               <a href="semana.html">
               <FaCalendarMinus/> SEMANA
               </a>
             </div>
             <div className="borda"></div>
             <div className="item">
               <a href="#">
                 <FaBook/> ESTUDO
               </a>
             </div>
             <div className="item">
               <a href="compras.html">
                 <FaShoppingCart/> COMPRAS
               </a>
             </div>
             <div className="item">
               <a href="#">
                 <i className="far fa-calendar-alt"></i>AGENDA
               </a>
             </div>
            
           </div>
         </div>
       </nav>
     </div>
     
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
