import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Header from "../../components/HeaderPrincipal/index.js";
import SideBar from "../../components/MenuLateral/index.js";
import Modal from "../../components/ModalTarefa";
import Desempenho from "../../components/ModalDesempenho";
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDesempenhoOpen, setIsModalDesempenhoOpen] = useState(false);
  const { sideBarIsActive } = useAuth();

  const openModal = () => {
    setIsModalOpen(true);
  };
  const openModalDesempenho = () => {
    setIsModalDesempenhoOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeModalDesempenho = () => {
    setIsModalDesempenhoOpen(false);
  };

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (!token && !localToken) {
      //logout();
      //navigate("/login");
    } else {
      const authToken = token || localToken;
      axios
        .get("http://localhost:4000/usuarios/buscarNome", {
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
            navigate("/landingpage"); // Redirecionar para a página de login
          } else {
            console.error("Erro ao buscar o nome do usuário:", error);
            console.log(error);
            logout();
            navigate("/landingpage");
          }
        });
    }
  }, [navigate, setUserName, token, logout]);

  useEffect(() => {
    fetchTarefas();
  }, [token]);

  return (
    <AppBody>
      <Header openModal={openModal} openModalDesempenho={openModalDesempenho} />
      <ContainerMainPrincial>
        <SideBar />
        <Main $isActive={sideBarIsActive}>
          <ContainerLembrete>
            <H2TelaInicial>LEMBRETES</H2TelaInicial>
            <Tarefa />
          </ContainerLembrete>
        </Main>
      </ContainerMainPrincial>
      {isModalOpen && <Modal isOpen={isModalOpen} closeModal={closeModal} />}
      {isModalDesempenhoOpen && (
        <Desempenho
          isOpen={isModalDesempenhoOpen}
          closeModalDesempenho={closeModalDesempenho}
        />
      )}
    </AppBody>
  );
};

export default Home;
