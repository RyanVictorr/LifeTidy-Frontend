import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";

import logo from "../../assets/logo.png";
import {
  AppBody,
  Main,
  Form,
  ContainerLogo,
  Link,
  ImageLogo,
  ContainerInputs,
  Input,
  ContainerText,
  LinkSenha,
  ButtonLogin,
  ContainerTextBorda,
  PLogin,
  PInscrevaSe,
  LinkInscrevaSe,
  ErrorText,
  Container,
  PasswordIcone,
  EmailIcone
} from "./styles";

const App = () => {
  const axiosInstance = axios.create({
    withCredentials: true,
  });

  const navigate = useNavigate();
  const { setToken } = useAuth();
  
  
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axiosInstance.post(
      'http://localhost:4000/usuarios/login',
      {
        email: formData.email,
        senha: formData.senha,
      }
    );

      if (response.status === 200) {
        // Após o login bem-sucedido
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        console.log(response);

        navigate('/home');
      } else {
        console.error("Erro no login - código de status:", response.status);
        setError(
          "Credenciais inválidas. Por favor, verifique seus dados de login."
        );
      }
    } catch (error) {
      console.error("Erro no login:", error);

      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError("Erro desconhecido");
      }
    }
  };

  return (
    <AppBody>
      <Main>
        <Form onSubmit={handleSubmit}>
          <ContainerLogo>
            <Link onClick={() => navigate("/landingpage")}>
              <ImageLogo src={logo} alt={"Logo-LifeTidy"} />
            </Link>
          </ContainerLogo>
          <ContainerInputs>
          <Container>
                <EmailIcone />
                <Input
                  type="email"
                  placeholder="E-MAIL"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={40}
                />
              </Container>
            <Container>
                <PasswordIcone />
                <Input
                  type="password"
                  placeholder="SENHA"
                  required
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  maxLength={30}
                />
              </Container>
          </ContainerInputs>
          {error && <ErrorText>{error}</ErrorText>}
          <ContainerText>
            <PLogin>ESQUECEU A SENHA?</PLogin>
            <LinkSenha onClick={() => navigate("/senha")}>Recuperar</LinkSenha>
          </ContainerText>
          <ButtonLogin type="submit">LOGIN</ButtonLogin>
          <ContainerTextBorda>
            <PInscrevaSe>NÃO TEM CADASTRO?</PInscrevaSe>
            <LinkInscrevaSe onClick={() => navigate("/cadastro")}>
              Inscreva-se
            </LinkInscrevaSe>
          </ContainerTextBorda>
        </Form>
      </Main>
    </AppBody>
  );
};

export default App;
