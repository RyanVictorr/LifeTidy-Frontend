import styled from "styled-components";

import EmailIcon from "../../assets/email.png";
import senhaIcon from "../../assets/senha.png";

export const AppBody = styled.div`
  height: 100%;
  background-color: #0a3950;
`;

export const Main = styled.main`
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  border-radius: 15px;
  padding: 2em 4em 4em 4em;
  align-items: center;

  @media (max-width: 555px) {
    padding: 20px;
  }
  @media (max-width: 715px) {
    padding: 2em 1.5em 4em 1.5em;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ImageLogo = styled.img`
  display: flex;
  max-width: 300px;
  padding-bottom: 20px;
  border-bottom: 1px solid #3c3b3b4d;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  border: none;
  border-radius: 10px;
  height: 40px;
  margin-top: 15px;
  font-size: 17px;
  color: #3c3b3b;
  background-position: 10px;
  background-repeat: no-repeat;
  background-size: 25px;
  padding-left: 40px;
  min-width: 308px;

  &[type="email"] {
    background-image: url(${EmailIcon});
  }

  &[type="password"] {
    background-image: url(${senhaIcon});
  }
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  justify-content: space-evenly;
  padding-top: 15px;
`;
export const PSenha = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin-right: 5px;
  font-size: 13px;
  margin: 0.5em;
`;
export const LinkSenha = styled.a`
  color: #5f98b4;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #0d4766;
    text-decoration: underline;
  }
`;

export const ButtonLogin = styled.button`
color: #ffffff;
  background-color: #0a3950;
  border-radius: 15px;
  border: none;
  height: 38px;
  width: 150px;
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 17px;
  cursor: pointer;

  &:hover{
    opacity: 0.8;
  }
`
