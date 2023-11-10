import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importe o Axios

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

  // Use o estado para controlar os valores do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
  });

  // Função para lidar com a alteração nos campos do formulário
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nome, email, senha, confirmarSenha, telefone } = formData;

    // Verifica se as senhas são iguais
    if (senha !== confirmarSenha) {
      console.error("As senhas não coincidem.");
      return;
    }

    try {
      // Faça a chamada para o backend usando o Axios
      const response = await axios.post("http://localhost:3001/usuarios", {
        nome,
        email,
        senha,
        telefone,
      });

      if (response.status === 201) {
        console.log("Usuário cadastrado com sucesso");
        // Adicione aqui qualquer lógica adicional após o cadastro bem-sucedido, se necessário
      } else {
        console.error("Erro ao cadastrar o usuário");
      }
    } catch (error) {
      console.error("Erro ao cadastrar o usuário", error);
    }
  };

  return (
    <AppBody>
      <ContainerCadastro>
        <SubContainerCadastro>
          <Main>
            <Form onSubmit={handleSubmit}>
              <H2Cadastro>CADASTRO</H2Cadastro>
              <Input
                type="text"
                placeholder="NOME COMPLETO"
                required
                autoFocus
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />
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
              <Input
                type="password"
                placeholder="CONFIRME SUA SENHA"
                required
                name="confirmarSenha"
                value={formData.confirmarSenha}
                onChange={handleChange}
              />
              <Input
                $lastinput={true}
                type="tel"
                placeholder="TELEFONE"
                required
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
              />
              <ContainerText>
                <P>JÁ POSSUI CADASTRO?</P>
                <LinkLogin onClick={() => navigate("/login")}>Login!</LinkLogin>
              </ContainerText>
              <ContainerLoginCom>
                <ButtonCadastro type="submit">CADASTRAR</ButtonCadastro>
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
