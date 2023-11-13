import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Dialog = styled.dialog`
border: none;
background-color: transparent;
border-radius: 25px;
max-width: 58em;
padding: 0;
&::backdrop{
    background-color: #011620d0;
}
@media(max-width: 568px) {
  {
    width: 90%;
}
`;

export const ContainerAdicionarTarefa = styled.div`
background-color: #0A3950;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
width: 100%;
height: 3em;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const ContainerH2Tarefa = styled.div`

`;

export const H2AdicionarTarefa = styled.h2`
margin: 0 0.5em;
font-size: 20px;
color: #FFF;
`;

export const ContainerButtonExit = styled.div`
display: flex;
justify-content: end;
height: 36px;
`;
export const StyledIcon = styled(FontAwesomeIcon)`
margin: 0.1em 0.2em 0.8em 0;
font-size: 30px;
cursor: pointer
`;
export const FormDetalhesTarefas = styled.form`
  /* Adicione estilos para o FormDetalhesTarefas aqui */
`;

export const ContainerCategoria = styled.div`
  /* Adicione estilos para o ContainerCategoria aqui */
`;

export const H4InfomacoesInputs = styled.h4`
  /* Adicione estilos para o H4InfomacoesInputs aqui */
`;

export const SelectInputsWidth = styled.select`
  /* Adicione estilos para o SelectInputsWidth aqui */
`;

export const ContainerImportancia = styled.div`
  /* Adicione estilos para o ContainerImportancia aqui */
`;

export const ContainerInicio = styled.div`
  /* Adicione estilos para o ContainerInicio aqui */
`;

export const ContainerInicioConclusaoHorario = styled.div`
  /* Adicione estilos para o ContainerInicioConclusaoHorario aqui */
`;

export const ContainerConclusao = styled.div`
  /* Adicione estilos para o ContainerConclusao aqui */
`;

export const ContainerDescricaoTarefa = styled.div`
  /* Adicione estilos para o ContainerDescricaoTarefa aqui */
`;

export const DivButtonNovaTarefa = styled.div`
  /* Adicione estilos para o DivButtonNovaTarefa aqui */
`;

export const ButtonCriarTarefa = styled.button`
  /* Adicione estilos para o ButtonCriarTarefa aqui */
`;

// Continue adicionando os exports para os outros elementos...
