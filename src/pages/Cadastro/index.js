import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import ImageExibicao from "../../assets/exibição.jpg";

import {
  AppBody,
  ContainerCadastro,
  SubContainerCadastro,
  Main,
  Form,
  H2Cadastro,
  Input,
  ContainerText,
  P,
  LinkLogin,
  ContainerLoginCom,
  ButtonCadastro,
  Anside,
  ContainerLogo,
  Link,
  ImageLogo,
  ContainerRecados,
  PCadastro,
  ContainerImgExib,
  Image,
} from "./styles";

const App = () => {
  const navigate = useNavigate();

  return (
    <AppBody>
      <ContainerCadastro>
        <SubContainerCadastro>
          <Main>
            <Form>
              <H2Cadastro>CADASTRO</H2Cadastro>
              <Input
                type="text"
                placeholder="NOME COMPLETO"
                required
                autofocus
              />
              <Input type="email" placeholder="E-MAIL" required />
              <Input type="password" placeholder="SENHA" required />
              <Input
                type="password"
                placeholder="CONFIRME SUA SENHA"
                required
              />
              <Input
                lastInput={true}
                type="tel"
                placeholder="TELEFONE"
                required
              />
              <ContainerText>
                <P>JÁ POSSUI CADASTRO?</P>
                <LinkLogin onClick={() => navigate("/login")}>Login!</LinkLogin>
              </ContainerText>
              <ContainerLoginCom>
                <ButtonCadastro >CADASTRAR</ButtonCadastro>
              </ContainerLoginCom>
            </Form>
          </Main>
          <Anside>
            <ContainerLogo>
              <Link onClick={() => navigate("/landingpage")}>
                <ImageLogo src={logo} alt={"Logo-LifeTidy"} />
              </Link>
            </ContainerLogo>
            <ContainerRecados>
              <PCadastro>
                Viva de forma organizada, torne o seu dia a dia mais produtivo.
              </PCadastro>
              <PCadastro>
                A organização é a chave para a produtividade.
              </PCadastro>
            </ContainerRecados>
            <ContainerImgExib>
              <Image src={ImageExibicao} alt="Img-exibição" />
            </ContainerImgExib>
          </Anside>
        </SubContainerCadastro>
      </ContainerCadastro>
    </AppBody>
  );
};

export default App;
