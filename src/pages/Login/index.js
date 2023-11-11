import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
} from "./styles";

const App = () => {
  const navigate = useNavigate();

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
      const response = await axios.post("http://localhost:4000/usuarios/login", {
        email: formData.email,
        senha: formData.senha,
      });

      if (response.status === 200) {
        console.log("Login bem sucedido!");
        
        navigate("/home");
      } else {
        console.error("Erro no login");
      }
    } catch (error) {
      console.error("Erro no login", error);

      // Verifica qual é o erro é do back com detalhes
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
            <Input
              type="email"
              placeholder="E-MAIL"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              type="password"
              placeholder="SENHA"
              required
              name="senha"
              value={formData.senha}
              onChange={handleChange}
            />
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
