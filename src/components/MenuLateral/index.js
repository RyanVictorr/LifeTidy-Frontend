import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MainPrincipal,
  DivLateral,
  NavLateral,
  MenuButton,
  SideBar,
  CloseButton,
  Menu,
  MenuItem,
  LinkSideBar,
  Border,
  StyledIcon,P
} from "./styles";

import {
  faBars,
  faTimes,
  faHome,
  faCalendar,
  faCalendarMinus,
  faBook,
  faShoppingCart,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <MainPrincipal>
      <DivLateral>
        <NavLateral>
          <MenuButton onClick={toggleSidebar}>
            <StyledIcon icon={faBars} />
          </MenuButton>
          <SideBar active={isActive ? "true" : undefined}>
            <CloseButton onClick={toggleSidebar}>
              <StyledIcon icon={faTimes} />
            </CloseButton>
            <Menu>
              <MenuItem $principal>
                <LinkSideBar onClick={() => navigate("/home")}>
                  <StyledIcon icon={faHome} />
                  INICIO
                </LinkSideBar>
              </MenuItem>
              <MenuItem>
                <LinkSideBar onClick={() => navigate("/hoje")}>
                  <StyledIcon icon={faCalendar} />
                  HOJE
                </LinkSideBar>
              </MenuItem>
              <MenuItem>
                <LinkSideBar onClick={() => navigate("/semana")}>
                  <StyledIcon icon={faCalendarMinus} />
                  SEMANA
                </LinkSideBar>
              </MenuItem>
              <Border></Border>
              <MenuItem $estudo>
              <LinkSideBar>
                  <StyledIcon icon={faBook} />
                  ESTUDO
                  </LinkSideBar>
                  <P>(Desenvolvimento)</P>
              </MenuItem>
              <MenuItem>
              <LinkSideBar onClick={() => navigate("/compras")}>
                  <StyledIcon icon={faShoppingCart} />
                  COMPRAS
                  </LinkSideBar>
                  
              </MenuItem>
              <MenuItem>
              <LinkSideBar onClick={() => navigate("/agenda")}>
                  <StyledIcon icon={faCalendarAlt} />
                  AGENDA
                  </LinkSideBar>
              </MenuItem>
            </Menu>
          </SideBar>
        </NavLateral>
      </DivLateral>
    </MainPrincipal>
  );
};

export default Sidebar;
