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
} from "./styles";

const App = () => {
  // Configuração do Axios
  const axiosInstance = axios.create({
    withCredentials: true,
  });

  // Hooks e estado para controle do formulário e erros
  const navigate = useNavigate();
  const { login, setAuthenticatedUser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });
  const [error, setError] = useState(null);

  // Função para atualizar o estado do formulário
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Função para submeter o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Requisição para o servidor de login
      const response = await axiosInstance.post(
        "http://localhost:4000/usuarios/login",
        {
          email: formData.email,
          senha: formData.senha,
        }
      );

      // Verificação da resposta do servidor
      if (response.status === 200) {
        // Login bem-sucedido
        login(response.data.token);
        console.log("Token recebido:", response.data.token);

        // Requisição para obter o nome do usuário após o login
        const nomeResponse = await axiosInstance.get(
          "http://localhost:4000/usuarios/buscarNome",
          {
            headers: {
              Authorization: `Bearer ${response.data.token}`,
            },
          }
        );

        // Atualização do nome do usuário no contexto
        setAuthenticatedUser(nomeResponse.data.usuarioNome);
        console.log("Nome do usuário:", nomeResponse.data.usuarioNome);

        // Redirecionamento para a página inicial após o login bem-sucedido
        navigate("/home");
      } else {
        // Erro no login
        console.error("Erro no login");
      }
    } catch (error) {
      // Tratamento de erros durante o login
      console.error("Erro no login", error);

      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError("Erro desconhecido");
      }
    }
  };

  // Renderização do componente de login
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
