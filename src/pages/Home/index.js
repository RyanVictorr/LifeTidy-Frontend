import React from "react";
import Header from "../../components/HeaderPrincipal/index.js";
import SideBar from "../../components/MenuLateral/index.js";


import { 
  AppBody, ContainerMainPrincial,
  Main,ContainerLembrete,
  H2TelaInicial } from "./styles";

const App = () => {
  

  return (
    <AppBody>
      <Header />
      <ContainerMainPrincial>
      <SideBar />
      <Main>
        <ContainerLembrete>
          <H2TelaInicial> LEMBRETES </H2TelaInicial>
        </ContainerLembrete>
      </Main>
      </ContainerMainPrincial>
      
      
    </AppBody>
  );
};
export default App;
