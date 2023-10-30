import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaCalendar, FaCalendarMinus, FaBook, FaShoppingCart } from 'react-icons/fa';

const Menu = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <div className="div-lateral">
      <nav className="nav-lateral">
        <div className="menu-btn" onClick={toggleSideBar}>
          <FaBars />
        </div>
        <div className={`side-bar ${sideBarOpen ? 'active' : ''}`}>
          <div className="close-btn" onClick={toggleSideBar}>
            <FaTimes />
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
            <div className="item">
              <a href="semana.html">
                <FaCalendarMinus /> SEMANA
              </a>
            </div>
            <div className="borda"></div>
            <div className="item">
              <a href="#">
                <FaBook /> ESTUDO
              </a>
            </div>
            <div className="item">
              <a href="compras.html">
                <FaShoppingCart /> COMPRAS
              </a>
            </div>
            <div className="item">
              <a href="#">
                <FaCalendar /> AGENDA
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;