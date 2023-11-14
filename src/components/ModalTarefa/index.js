import React, { useState } from "react";
import { 
  Dialog, 
  ContainerAdicionarTarefa, 
  ContainerH2Tarefa,
  StyledIcon, 
  H2AdicionarTarefa,InputSelect,
  TextArea,ContainerButtonExit, 
  FormDetalhesTarefas, 
  ContainerCategoria, 
  H4InfomacoesInputs, 
  SelectInputsWidth, 
  ContainerImportancia, 
  ContainerInicio, 
  ContainerInicioConclusaoHorario, 
  ContainerConclusao, 
  ContainerDescricaoTarefa, 
  DivButtonNovaTarefa, 
  ButtonCriarTarefa } from "./styles";
  import {
    faClose,
    
  } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <Dialog>
      <ContainerAdicionarTarefa>
        <ContainerH2Tarefa>
          <H2AdicionarTarefa>ADICIONAR TAREFA</H2AdicionarTarefa>
          <ContainerButtonExit>
          <StyledIcon icon={faClose}/>
          </ContainerButtonExit>
        </ContainerH2Tarefa>
        <FormDetalhesTarefas>
          <ContainerCategoria>
            <H4InfomacoesInputs>CATEGORIA</H4InfomacoesInputs>
            <SelectInputsWidth name="categoria" id="categoria">
              <option value="estudo">ESTUDO</option>
              <option value="compras">COMPRAS</option>
              <option value="agenda">AGENDA</option>
            </SelectInputsWidth>
          </ContainerCategoria>
          <ContainerImportancia>
            <H4InfomacoesInputs>IMPORTÂNCIA</H4InfomacoesInputs>
            <SelectInputsWidth name="importancia" id="importancia">
              <option value="urgente">URGENTE</option>
              <option value="regular">REGULAR</option>
              <option value="pouco-urgente">BAIXA</option>
            </SelectInputsWidth>
          </ContainerImportancia>
          <ContainerInicio>
            <ContainerInicioConclusaoHorario>
              <H4InfomacoesInputs>INÍCIO</H4InfomacoesInputs>
              <InputSelect type="date" />
            </ContainerInicioConclusaoHorario>
            <ContainerInicioConclusaoHorario>
              <H4InfomacoesInputs>HORÁRIO</H4InfomacoesInputs>
              <InputSelect type="time" />
            </ContainerInicioConclusaoHorario>
          </ContainerInicio>
          <ContainerConclusao>
            <ContainerInicioConclusaoHorario>
              <H4InfomacoesInputs>CONCLUSÃO</H4InfomacoesInputs>
              <InputSelect type="date" />
            </ContainerInicioConclusaoHorario>
            <ContainerInicioConclusaoHorario>
              <H4InfomacoesInputs >HORÁRIO</H4InfomacoesInputs>
              <InputSelect type="time" />
            </ContainerInicioConclusaoHorario>
          </ContainerConclusao>
          <ContainerDescricaoTarefa>
            <H4InfomacoesInputs>TAREFA</H4InfomacoesInputs>
            <TextArea type="text"></TextArea>
          </ContainerDescricaoTarefa>
          <ContainerDescricaoTarefa>
            <H4InfomacoesInputs>Descrição</H4InfomacoesInputs>
            <TextArea type="text"></TextArea>
          </ContainerDescricaoTarefa>
          <DivButtonNovaTarefa>
            <ButtonCriarTarefa type="submit" >CRIAR TAREFA</ButtonCriarTarefa>
          </DivButtonNovaTarefa>
        </FormDetalhesTarefas>
      </ContainerAdicionarTarefa>
    </Dialog>
  );
};

export default App;