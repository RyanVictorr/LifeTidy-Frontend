import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"; // Importe o contexto de autenticação
import perfil from "../../assets/perfil.png";
import Modal from "../ModalTarefa/index.js"
import { 
    ContainerHeader,
    ContainerLogo,
    ContainerImg,
    ContainerButtons,InputPesquisa,
    ContainerButtonsModal,
    ButtonAdicionar,
    ButtonAviso,
    ButtonDesempenho,
    ContainerPerfil,LinkMenu,
    Pnome,ContainerImgPerfil,
    LinkPerfil,ImagePerfil,
    ContainerSubMenu,} from "./styles";

    const Header = ({ openModal }) => {
const navigate = useNavigate();
const [showModal, setShowModal] = useState(false);
const [showSubMenu, setShowSubMenu] = useState(false);

const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const { userName } = useAuth(); // Obtenha o nome do usuário do contexto

  const { setToken, setUserName } = useAuth();
  const handleLogout = () => {
    // Limpe o token e outras informações de autenticação
    setToken(null);
    setUserName(null);
  
    // Redirecione o usuário para a página de login
    navigate("/login");
  };
    return(
       
            <ContainerHeader>
                <ContainerLogo>
                    <Link onClick={() => navigate("/landingpage")}>
                        <ContainerImg>
                        </ContainerImg>
                    </Link>
                </ContainerLogo>
                <ContainerButtons>
                    <InputPesquisa type="text" placeholder="PESQUISAR"/>
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
                            <LinkMenu $lastLinkPerfil onClick={handleLogout}>SAIR</LinkMenu>
                        </ContainerSubMenu>
                    </ContainerImgPerfil>
                </ContainerPerfil>
                <Modal isOpen={showModal} closeModal={toggleModal} />
    
            </ContainerHeader>
        
    );
}
 
export default Header;