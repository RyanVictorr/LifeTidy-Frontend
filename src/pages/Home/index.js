import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Header from "../../components/HeaderPrincipal/index.js";
import SideBar from "../../components/MenuLateral/index.js";
//import Modal from "../../components/ModalTarefa";
//import Desempenho from "../../components/ModalDesempenho";
import NovaTarefaModal from "../../components/NovaTarefaModal";
import Tarefa from "../../components/Tarefas/index.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  AppBody,
  ContainerMainPrincial,
  Main,
  ContainerLembrete,
  H2TelaInicial,
} from "./styles";

const Home = () => {
  const navigate = useNavigate();
  const { token, setUserName, logout, fetchTarefas } = useAuth(); // Obtendo o token do contexto de autenticação

  const [isModalBootstrapOpen, setIsModalBootstrapOpen] = useState(false); // Estado para a nova modal Bootstrap
  const { sideBarIsActive } = useAuth();

  const openModalBootstrap = () => {
    setIsModalBootstrapOpen(true);
  };

  const closeModalBootstrap = () => {
    setIsModalBootstrapOpen(false);
  };

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (!token && !localToken) {
      //logout();
      //navigate("/login");
    } else {
      const authToken = token || localToken;
      axios
        .get("https://lifetidy.onrender.com/usuarios/buscarNome", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {
          let userName = response.data.usuarioNome;
          let userNameSplit = userName.split(" ");
          if (userNameSplit.length > 2) {
            userName = userNameSplit.slice(0, 2).join(" ");
          }
          setUserName(userName);
          localStorage.setItem("userName", userName);
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            // Se receber um status 401 (Não Autorizado), o token pode ser inválido ou expirado
            logout(); // Limpar os dados de autenticação
            navigate("/"); // Redirecionar para a página de login
          } else {
            console.error("Erro ao buscar o nome do usuário:", error);
            console.log(error);
            logout();
            navigate("/");
          }
        });
    }
  }, [navigate, setUserName, token, logout]);

  useEffect(() => {
    fetchTarefas();
   // eslint-disable-next-line
  }, [token]);

  return (
    <AppBody>
      <Header openModal={openModalBootstrap}  />
      <ContainerMainPrincial>
        <SideBar />
        <Main $isActive={sideBarIsActive}>
          <ContainerLembrete>
            <H2TelaInicial>LEMBRETES</H2TelaInicial>
            <Tarefa />
          </ContainerLembrete>
        </Main>
      </ContainerMainPrincial>
      {isModalBootstrapOpen && (
        <NovaTarefaModal
          isOpen={isModalBootstrapOpen}
          closeModal={closeModalBootstrap}
        />
      )}
    </AppBody>
  );
};

export default Home;
