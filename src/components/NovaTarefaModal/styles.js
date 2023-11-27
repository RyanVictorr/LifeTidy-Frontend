import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from 'react-bootstrap';

export const CustomModal = styled(Modal)`
  .modal-content {
    border-radius: 25px; /* Ajuste o raio da borda conforme necessário */
  }
`;

export const Dialog = styled.dialog`
  position: relative;
  border: none;
  background-color: transparent;
  border-radius: 25px;
  max-width: 58em;
  padding: 0;
  margin: 1em;
  border-radius: 15px;

  @media (max-height: 700px) {
    overflow-y: auto;
    max-height: 80vh;
  }
`;

export const ContainerAdicionarTarefa = styled.div``;

export const ContainerH2Tarefa = styled.div`
  background-color: #0a3950;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const H2AdicionarTarefa = styled.h2`
  margin: 0 0.5em;
  font-size: 20px;
  color: #fff;
`;

export const ContainerButtonExit = styled.div`
  display: flex;
  justify-content: end;
  height: 36px;
  color: #FFF;
`;
export const StyledIcon = styled(FontAwesomeIcon)`
  margin: 0.1em 0.2em 0.8em 0;
  font-size: 30px;
  cursor: pointer;
`;
export const FormDetalhesTarefas = styled.form`
  background-color: #fff;
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
  width: 10.5em;
  background-color: #d9d9d9;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  height: 1.8em;
  margin-right: 3px;
`;
export const InputSelect = styled.input`
  background-color: #d9d9d9;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  width: 10em;
  height: 1.8em;
  margin-right: 3px;
  width: 90%;
  max-width: 10.5em;
`;
export const TextArea = styled.textarea`
  background-color: #d9d9d9;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 16px;
  height: 1.8em;
  margin-right: 3px;
  text-align: start;
  padding: 4px 0 0 10px;
  width: 90%;
  max-height: 80px;
`;

export const ContainerImportancia = styled.div`
  padding: 1em 0 0.7em 1em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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
  justify-content: space-evenly;
  display: flex;
  margin-top: 2em;
`;

export const ButtonCriarTarefa = styled.button`
  height: 2.5em;
  width: 12em;
  border: none;
  border-radius: 25px;
  background-color: #d9d9d9;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: 1.5s ease;
  &:hover {
    background-color: #9e9e9e;
  }
`;

export const ButtonCancelar = styled.div`
height: 2.5em;
    width: 7em;
    border: none;
    border-radius: 25px;
    background-color: #0a3950;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: 1.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
  &:hover {
    background-color: #2f6f8e;
  }
`;