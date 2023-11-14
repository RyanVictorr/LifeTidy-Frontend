import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
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

const Header = () => {
const navigate = useNavigate();
const [showModal, setShowModal] = useState(false);
const [showSubMenu, setShowSubMenu] = useState(false);

const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
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
                        <ButtonAdicionar  onClick={toggleModal}></ButtonAdicionar>
                        <ButtonAviso></ButtonAviso>
                        <ButtonDesempenho></ButtonDesempenho>
                    </ContainerButtonsModal>
                </ContainerButtons>
                <ContainerPerfil>
                    <Pnome>Nome Usuario</Pnome>
                    <ContainerImgPerfil>
                        <LinkPerfil onClick={toggleSubMenu}>
                            <ImagePerfil src={perfil} alt={"Imagem-perfil"} />
                        </LinkPerfil>
                        <ContainerSubMenu $active={showSubMenu ? "true" : undefined}>
                            <LinkMenu>EDITAR PERFIL</LinkMenu>
                            <LinkMenu>CONFIGURAÇÕES</LinkMenu>
                            <LinkMenu $lastLinkPerfil onClick={() => navigate("/landingpage")}>SAIR</LinkMenu>
                        </ContainerSubMenu>
                    </ContainerImgPerfil>
                </ContainerPerfil>
                <Modal isOpen={showModal} closeModal={toggleModal} />
    </ContainerHeader>
            
        
    );
}
 
export default Header;