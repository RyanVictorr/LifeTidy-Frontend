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
background-color: #FFF;
padding-bottom: 2em;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
padding-right: 10px;
`;

export const ContainerCategoria = styled.div`
padding: 1em 0 0.7em 1em;
display: flex;
align-items: center;
flex-wrap: wrap;
`;

export const H4InfomacoesInputs = styled.h4`
margin: 0;
font-weight: 600;
font-size: 20px;
margin-right: 10px;
min-width: 7em;
`;

export const SelectInputsWidth = styled.select`
width: 29.5em;
`;
export const InputSelect = styled.input`
background-color: #D9D9D9;
border: none;
border-radius: 25px;
font-weight: 600;
font-size: 16px;
text-align: center;
width: 10em;
height: 1.8em;
margin-right: 3px;
`;
export const TextArea = styled.textarea`
`;

export const ContainerImportancia = styled.div`
  /* Adicione estilos para o ContainerImportancia aqui */
`;

export const ContainerInicio = styled.div`
padding: 1em 0 0.7em 1em;
display: flex;
align-items: center;
flex-wrap: wrap;
`;

export const ContainerInicioConclusaoHorario = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
margin-top: 5px;
`;

export const ContainerConclusao = styled.div`
padding: 1em 0 0.7em 1em;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
`;

export const ContainerDescricaoTarefa = styled.div`
padding: 1em 0 0.7em 1em;
display: flex;
align-items: center;
flex-wrap: wrap;
`;

export const DivButtonNovaTarefa = styled.div`
justify-content: center;
display: flex;
margin-top: 2em;
`;

export const ButtonCriarTarefa = styled.button`
height: 2.5em;
width: 12em;
border: none;
border-radius: 25px;
background-color: #D9D9D9;
font-size: 16px;
font-weight: 700;
cursor: pointer;
transition: 1.5s ease;
&:hover{
  background-color: #9e9e9e;
}
`;

// Continue adicionando os exports para os outros elementos...
