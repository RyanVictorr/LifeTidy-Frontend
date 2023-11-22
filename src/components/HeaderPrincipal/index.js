import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import perfil from "../../assets/perfil.png";
import Modal from "../ModalTarefa/index.js";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import {
  ContainerHeader,
  ContainerLogo,
  ContainerImg,
  ContainerButtons,
  InputPesquisa,
  ContainerButtonsModal,
  ButtonAdicionar,
  ButtonAviso,
  ButtonDesempenho,
  ContainerPerfil,
  LinkMenu,
  Pnome,
  ContainerImgPerfil,
  LinkPerfil,
  ImagePerfil,
  ContainerSubMenu,
} from "./styles";

const Header = ({ openModal }) => {
    
  const navigate = useNavigate();
  const { userName, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:4000/usuarios/logout');
      logout();
      navigate('/landingpage');
    } catch (error) {
      console.error('Erro ao realizar logout:', error);
      // Trate o erro conforme necessário
    }
  };

  
  
  return (
    <ContainerHeader>
      <ContainerLogo>
        <Link onClick={() => navigate("/landingpage")}>
          <ContainerImg></ContainerImg>
        </Link>
      </ContainerLogo>
      <ContainerButtons>
        <InputPesquisa type="text" placeholder="PESQUISAR" />
        <ContainerButtonsModal>
          <ButtonAdicionar onClick={openModal}></ButtonAdicionar>
          <ButtonAviso></ButtonAviso>
          <ButtonDesempenho></ButtonDesempenho>
        </ContainerButtonsModal>
      </ContainerButtons>
      <ContainerPerfil>
        <Pnome>{userName}</Pnome>
        <ContainerImgPerfil>
          <LinkPerfil onClick={toggleSubMenu}>
            <ImagePerfil src={perfil} alt={"Imagem-perfil"} />
          </LinkPerfil>
          <ContainerSubMenu $active={showSubMenu ? "true" : undefined}>
            <LinkMenu>EDITAR PERFIL</LinkMenu>
            <LinkMenu>CONFIGURAÇÕES</LinkMenu>
            <LinkMenu $lastLinkPerfil onClick={handleLogout}>
              SAIR
            </LinkMenu>
          </ContainerSubMenu>
        </ContainerImgPerfil>
      </ContainerPerfil>
      <Modal isOpen={showModal} closeModal={toggleModal} />
    </ContainerHeader>
  );
};

export default Header;
