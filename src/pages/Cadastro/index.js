import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  const [formData, setFormData] = useState({
    nome_usuario: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nome_usuario, email, senha, confirmarSenha, telefone } = formData;
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      //Chamada para o backend
      const response = await axios.post("http://localhost:4000/usuarios", {
        nome_usuario,
        email,
        senha,
        telefone
      });

      if (response.status === 201) {
        console.log("Usuário cadastrado com sucesso");
        navigate("/login")
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
                name="nome_usuario"
                value={formData.nome_usuario}
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
