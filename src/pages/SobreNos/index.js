import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import areaTrabalho from "../../assets/areaTrabalho.png";
import {
  AppBody,
  Main,
  Link,
  ImageLogo,
  ContainerLogo,
  MainTitle,
  MainText,
  ImageDesktop,
  FooterLifeTidy,
  ContainerFooter,
  FooterTop,
  FooterLogo,
  FooterLinks,
  StyledUl,
  StyledLi,
  FooterBottom,
  PFooter,
} from "./styles"; // Importando os componentes do arquivo de estilos

const App = () => {
  const navigate = useNavigate();

  return (
    <AppBody>
      <Main>
        <ContainerLogo>
          <Link onClick={() => navigate("/landingpage")}>
            <ImageLogo src={logo} alt={"Logo-LifeTidy"} />
          </Link>
        </ContainerLogo>
        <MainTitle>
          Sua solução completa para organização pessoal e produtividade.
        </MainTitle>

        <MainText>
          LifeTidy é uma plataforma inovadora de organização pessoal projetada
          para simplificar sua vida e maximizar sua produtividade. Com uma
          combinação perfeita de recursos intuitivos, LifeTidy capacita você a
          gerenciar suas tarefas e compromissos de forma eficiente.
        </MainText>
        <ImageDesktop src={areaTrabalho} alt="Area-de-trabalho" />
        <MainText>
          Com LifeTidy, você pode criar listas de tarefas personalizadas,
          atribuir prazos, estabelecer prioridades e acompanhar seu rendimento
          em um único lugar. A interface simples e amigável permite que você
          adicione facilmente novas tarefas, visualize suas atividades em
          diferentes modos de exibição e receba lembretes inteligentes para
          manter-se no caminho certo.
        </MainText>

        <MainText>
          Desfrute de uma vida mais organizada, produtiva e equilibrada com
          LifeTidy. Simplifique suas tarefas, conquiste seus objetivos e
          aproveite ao máximo cada dia. Experimente agora mesmo e transforme a
          maneira como você se organiza e prospera!
        </MainText>
      </Main>
      <FooterLifeTidy>
        <ContainerFooter>
          <FooterTop>
            <FooterLogo>
              <ImageLogo src={logo} alt="LifeTidy Logo" />
            </FooterLogo>
            <FooterLinks>
              <StyledUl>
                <StyledLi onClick={() => navigate("/landingpage")}>
                  Página Inicial
                </StyledLi>
                <StyledLi onClick={() => navigate("/#pontoOne")}>
                  Recursos
                </StyledLi>
                <StyledLi onClick={() => navigate("/sobreNois")}>
                  Sobre Nós
                </StyledLi>
              </StyledUl>
            </FooterLinks>
          </FooterTop>
          <FooterBottom>
            <PFooter>Todos os direitos reservados &copy; 2023 LifeTidy</PFooter>
          </FooterBottom>
        </ContainerFooter>
      </FooterLifeTidy>
    </AppBody>
  );
};

export default App;
