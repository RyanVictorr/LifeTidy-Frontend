import styled from "styled-components";

export const AppBody = styled.div`
  background-color: #d9d9d9;
`;

export const Header = styled.header`
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2em;
  background-color: #d9d9d9;
  @media (max-width: 550px) {
    margin: 1em;
  }

`;

export const ContainerNav = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const ContainerLogoH = styled.div`
  max-width: 150px;
  margin-left: 1em;
  min-width: 115px;
  margin-left: 0;
`;

export const Link = styled.a`
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
export const ImageLogoH = styled.img`
  width: 100%;
  display: flex;
  cursor: pointer;

`;

export const LinkLandingPage = styled.a`
  text-decoration: none;
  color: #000000;
  font-size: 17px;
  font-weight: 600;
  margin-left: 2em;
  position: relative;
  display: inline-block;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px; 
    background: #000000; 
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    color: #5f98b4;

    &::after {
      width: 100%;
    }
  }
  

  @media (max-width: 768px) {
    margin: 5px;
    font-size: 80%;
  }
`;

export const UniqueLink = styled(LinkLandingPage)`
  background-color: #FFFFFF;
  padding: 0.7em 3.8em;
  border-radius: 25px;
  left: 19px;
  &:hover::after {
    width: 80%; 
    left: 19px;
  }

  @media (max-width: 768px) {
    padding: 0.7em 2em;
  }
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
  width: 12%;
`;

export const ImageLogoFooter = styled.img`
 min-width: 100px;
    width: 100%;
    height: 100%;
    margin: 11px 0 0 11px;
    cursor: pointer;
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
