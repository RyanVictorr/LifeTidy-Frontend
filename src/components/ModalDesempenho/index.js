import React, { useState } from "react";
import {
    Dialog,
    DivAdicionarTarefa,
    DivH2Tarefa,
    H2AdicionarTarefa,
    DivButtonExit,
    ContainerInformacoesModal,
   
    ContainerInformacoesConcluidasModal,
    MedalIcon,
    H2Parabens,
    PInformacoesDesempenho,
    DivBordaRedimento,
    DivPorcentagemRedimento,
    DivPorcentagemRedimentoDetalhada,
    StyledIcon,
  } from './styles';
  import{
    faClose
  }from "@fortawesome/free-solid-svg-icons";
const DesempenhoModal = ({ isOpen, closeModalDesempenho }) => {
  if (!isOpen) {
    return null;
  }
    
    return (
      <>
      {isOpen && (
        <Dialog>
        <DivAdicionarTarefa>
          <DivH2Tarefa>
            <H2AdicionarTarefa>INFORMATIVO DE RENDIMENTO</H2AdicionarTarefa>
            <DivButtonExit>
            <StyledIcon icon={faClose} onClick={closeModalDesempenho} />
            </DivButtonExit>
          </DivH2Tarefa>
        </DivAdicionarTarefa>
        <ContainerInformacoesModal>
          
          <ContainerInformacoesConcluidasModal>
            <MedalIcon></MedalIcon>
            <H2Parabens>PARABÉNS!</H2Parabens>
            <PInformacoesDesempenho>60% DAS SUAS TAREFAS ESTÃO CONCLUÍDAS NESSE PERÍODO, CONTINUE ASSIM!</PInformacoesDesempenho>
          </ContainerInformacoesConcluidasModal>
          <DivBordaRedimento></DivBordaRedimento>
          <DivPorcentagemRedimento>
            <PInformacoesDesempenho>COMPLETADAS HOJE</PInformacoesDesempenho>
            <DivPorcentagemRedimentoDetalhada>
              <PInformacoesDesempenho>URGENTE</PInformacoesDesempenho>
              <PInformacoesDesempenho>2 TAFEFAS FEITAS</PInformacoesDesempenho>
              <PInformacoesDesempenho>2 TAFEFAS À FAZER</PInformacoesDesempenho>
              <PInformacoesDesempenho>50% <span>CONCLUÍDOS</span></PInformacoesDesempenho>
            </DivPorcentagemRedimentoDetalhada>
            <DivPorcentagemRedimentoDetalhada>
              <PInformacoesDesempenho>REGULAR</PInformacoesDesempenho>
              <PInformacoesDesempenho>3 TAFEFAS FEITAS</PInformacoesDesempenho>
              <PInformacoesDesempenho>0 TAFEFAS À FAZER</PInformacoesDesempenho>
              <PInformacoesDesempenho>100% <span>CONCLUÍDOS</span></PInformacoesDesempenho>
            </DivPorcentagemRedimentoDetalhada>
            <DivPorcentagemRedimentoDetalhada>
              <PInformacoesDesempenho>POUCO URGENTE</PInformacoesDesempenho>
              <PInformacoesDesempenho>1 TAFEFAS FEITAS</PInformacoesDesempenho>
              <PInformacoesDesempenho>2 TAFEFAS À FAZER</PInformacoesDesempenho>
              <PInformacoesDesempenho>33% <span>CONCLUÍDOS</span></PInformacoesDesempenho>
            </DivPorcentagemRedimentoDetalhada>
          </DivPorcentagemRedimento>
        </ContainerInformacoesModal>
      </Dialog>
      )}
      </>
      );
  };
  
  export default DesempenhoModal;