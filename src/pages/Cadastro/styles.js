import styled from "styled-components";
import UserIcon from "../../assets/user.png";
import EmailIcon from "../../assets/email.png";
import senhaIcon from "../../assets/senha.png";
import TelefoneIcon from "../../assets/telefone.png";

export const AppBody = styled.div`
  height: 100%;
  background-color: #0a3950;
`;

export const ContainerCadastro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const SubContainerCadastro = styled.div`
  display: flex;
  background-color: #d9d9d9;
  border-radius: 15px;
  margin: 2em 4em;
  justify-content: space-around;
  max-width: 900px;

  @media (max-width: 555px) {
    flex-direction: column; 
  }
`;

export const Main = styled.main``;

export const Anside = styled.aside`
  margin: 2em 4em 4em 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  border-radius: 15px;
  padding: 2em 4em 4em 4em;
  align-items: center;

  @media (max-width: 555px) {
    padding: 0.5em 1.5em 4em 1.5em;
  }
`;

export const H2Cadastro = styled.h2`
  font-size: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #3c3b3b4d;
  width: 100%;
  text-align: center;
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
  margin-bottom: ${(props) => (props.lastInput ? "15px" : "0")};

  &[type="text"] {
    background-image: url(${UserIcon});
  }

  &[type="email"] {
    background-image: url(${EmailIcon});
  }

  &[type="password"] {
    background-image: url(${senhaIcon});
  }
  &[type="tel"] {
    background-image: url(${TelefoneIcon});
  }
`;

export const ContainerText = styled.div`
  border-top: 1px solid #3c3b3b4d;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const P = styled.p`
  margin: 15px 0;
  font-size: 14px;
  font-weight: 700;
  margin-right: 5px;
`;

export const LinkLogin = styled.a`
  color: #5f98b4;
  text-decoration: none;
  cursor: pointer;
`;

export const ContainerLoginCom = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ButtonCadastro = styled.button`
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
    max-width: 71%;
    margin-bottom: 0.5em;
`;

export const ContainerRecados = styled.div`
  width: 100%;
  max-width: 470px;
  background-color: #67818e;
  border-radius: 15px;
  margin-bottom: 1.5em;
  text-align: center;
  min-width: 150px;
`;

export const PCadastro = styled.p`
  margin: 1em;
  font-size: 20px;
  min-width: 145px;
`;

export const ContainerImgExib = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 15px;
`;
