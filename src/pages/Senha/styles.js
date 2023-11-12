import styled from "styled-components";
import EmailIcon from "../../assets/email.png";


export const AppBody = styled.div`
  height: 100%;
  background-color: #0a3950;
`;

export const ContainerCadastroPai  = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
export const ContainerCadastro  = styled.div`
  display: flex;
  background-color: #D9D9D9;
  border-radius: 15px;
  margin: 2em 4em;
  justify-content: space-around;
  max-width: 900px;
`;
export const Main  = styled.main`

padding: 1em;

`;
export const ContainerInput =styled.div`
display: flex;
flex-direction: column;
margin-top:15px;
`;


export const Form  = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #D9D9D9;
  border-radius: 15px;
  align-items: center;
  padding: 2em 1.5em 4em 1.5em;

  @media (max-width: 715px) {
    padding: 2em 1.5em 4em 1.5em;
}
`;
export const H2Cadastro = styled.h2`
font-size: 20px;
padding-bottom: 20px;
border-bottom: 1px solid #3C3B3B4D;
width: 100%;
 margin-top: 8px;

`;
export const InputEmail = styled.input`
border: none;
border-radius: 10px;
height: 40px;
margin-top: 15px;
font-size: 17px;
color: #3C3B3B;
background-position: 10px;
background-repeat: no-repeat;
background-size: 25px;
padding-left: 40px;
min-width: 308px;
font-size: 15px;
font-weight: 700;
&[type="email"] {
background-image: url(${EmailIcon});
}
  
`;
export const InputEmailRecuperacao = styled.input`
border: none;
border-radius: 10px;
height: 40px;
margin-top: 15px;
margin-bottom: 15px;
font-size: 17px;
color: #3C3B3B;
background-position: 10px;
background-repeat: no-repeat;
background-size: 25px;
padding-left: 40px;
min-width: 308px;
font-size: 15px;
font-weight: 700;
&[type="email"] {
background-image: url(${EmailIcon});
}
  
`;
export const ContainerText = styled.div`
border-top: 1px solid #3C3B3B4D;
display: flex;
align-items: center;
width: 100%;
justify-content: center;
  
`;
export const ContainerRecuperar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  
`;
export const ButtonRecuperar = styled.button`
color: #FFFFFF;
background-color: #0A3950;
border-radius: 15px;
border: none;
height: 38px;
width: 150px;
margin-bottom: 15px;
margin-top: 10px;
font-size: 17px;
cursor: pointer;
`;
export const ContainerRecuperacao = styled.aside`
margin: 2em 4em 4em 0;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;

@media (max-width: 715px) {
  margin: 2em 1.5em 4em 0;
}
@media (max-width: 555px) {
  display: none;
  }
`;
export const ContainerLogo = styled.div`
max-width: 300px;
padding-bottom: 20px;
border-bottom: 1px solid #3C3B3B4D;
border: none;

@media (max-width: 555px) {
  width: 85%;
  padding-bottom: 15px;
  flex-direction: column;
  }
  
`;
export const ImageLogo = styled.img`
width: 100%;
display: flex;
  
`;
export const Link = styled.a`

display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
