import React from "react";
import Header from "../../components/HeaderPrincipal/index.js";
import SideBar from "../../components/MenuLateral/index.js";


import { AppBody } from "./styles";

const App = () => {

  return (
    <AppBody>
      <Header />
      
      <SideBar />
      
    </AppBody>
  );
};
export default App;
