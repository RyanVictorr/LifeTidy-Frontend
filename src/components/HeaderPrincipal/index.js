import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

import perfil from "../../assets/perfil.png";
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
    ContainerSubMenu} from "./styles";

const App = () => {
    const navigate = useNavigate();
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
                        <ButtonAdicionar></ButtonAdicionar>
                        <ButtonAviso></ButtonAviso>
                        <ButtonDesempenho></ButtonDesempenho>
                    </ContainerButtonsModal>
                </ContainerButtons>
                <ContainerPerfil>
                    <Pnome>Nome Usuario</Pnome>
                    <ContainerImgPerfil>
                        <LinkPerfil>
                        <ImagePerfil src={perfil} alt={"Imagem-perfil"} />
                        </LinkPerfil>
                        <ContainerSubMenu>
                            <LinkMenu>EDITAR PERFIL</LinkMenu>
                            <LinkMenu>CONFIGURAÇÕES</LinkMenu>
                            <LinkMenu onClick={() => navigate("/landingpage")}>SAIR</LinkMenu>
                        </ContainerSubMenu>
                    </ContainerImgPerfil>
                </ContainerPerfil>
            </ContainerHeader>
        
    );
}
 
export default App;