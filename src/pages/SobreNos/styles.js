import styled from "styled-components";

export const AppBody = styled.body`
  background-color: #d9d9d9;
`;
export const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageLogo = styled.img`
  max-width: 400px;
  width: 100%;
  height: 100%;
  margin: 25px;
  cursor: pointer;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding-bottom: 6em;
`;

export const MainTitle = styled.h2`
  margin: 40px;
  text-align: center;
  font-size: 24px;
  max-width: 600px;
`;

export const MainText = styled.p`
  max-width: 672px;
  text-align: justify;
  margin: 25px 25px;
  font-size: 20px;
`;

export const ContainerLogo = styled.div`
  border: none;
  max-width: 370px;
  margin-top: 2em;
`;

export const ImageDesktop = styled.img`
  max-width: 400px;
  width: 100%;
  height: 100%;
  margin: 25px;
`;
export const FooterLifeTidy = styled.footer`
  background-color: #ffffff;
  padding: 10px 0;
  box-shadow: inset 0px 4px 4px #00000040;
`;

export const ContainerFooter = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLogo = styled.div`
  margin: 5px;
  width: 12%;
`;

export const FooterLinks = styled.div``;

export const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledLi = styled.li`
  cursor: pointer;
  display: inline-block;
  margin-right: 20px;
  text-decoration: none;
  color: #242424;
  font-size: 15px;
  transition: color 0.3s ease;
  font-weight: bold;

  &:hover {
    color: #21325a;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
`;

export const PFooter = styled.p`
  font-size: 12px;
  color: #242424;
  margin: 0;
`;

