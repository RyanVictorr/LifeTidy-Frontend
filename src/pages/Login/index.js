import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

import { AppBody, Main, Form, ContainerLogo, Link, ImageLogo, ContainerInputs, Input, ContainerText, } from "./styles";

const App = () => {
  const navigate = useNavigate();

  return (
    <AppBody>
      <Main>
        <Form>
          <ContainerLogo>
            <Link onClick={() => navigate("/landingpage")}>
              <ImageLogo src={logo} alt={"Logo-LifeTidy"} />
            </Link>
          </ContainerLogo>
          <ContainerInputs>
            <Input type="email" placeholder="E-MAIL" required />
            <Input type="password" placeholder="SENHA" required />
          </ContainerInputs>
          <ContainerText>
            <PLogin>
              ESQUECEU A SENHA?
            </PLogin>
            <LinkSenha onClick={() => navigate("/senha")}> 
              Recuperar
            </LinkSenha>
          </ContainerText>
        </Form>
      </Main>
    </AppBody>
  );
};

export default App;
