import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { useState } from "react";
import ModalExclusao from "../ModalExclusaoTarefa";

import {
  ContainerPaiLembretes,
  ContainerLembretes,
  InformacoesLembretes,
  Prazos,
  Checkbox,
  H4Checkbox,
  DescricaoLembretes,
  TextBox,
  LinkTextBox,
  DescricaoDetalhada,
  EditarExcluir,
  StyledIcon,
  H2,
  H4,
  P,
  ContainerCheckbox,
  PPrioridade,
  Container,
} from "./styles";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Tarefa = () => {
  const { tarefas, token } = useAuth();

  //convertendo o formato da data para 'ano/mês/dia' (YYYY-MM-DD)
  const converterFormatoData = (data) => {
    const partesData = data.split("/");
    if (partesData.length === 3) {
      return `${partesData[2]}-${partesData[1]}-${partesData[0]}`;
    }
    return data;
  };

  // Ordenar as tarefas pelo prazo mais próximo
  const tarefasOrdenadas = [...tarefas].sort((a, b) => {
    const dataA = new Date(converterFormatoData(a.data_fim)).getTime();
    const dataB = new Date(converterFormatoData(b.data_fim)).getTime();
    return dataA - dataB;
  });

  const [showModal, setShowModal] = useState(false);
  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);

  const openModal = (idTarefa) => {
    setTarefaSelecionada(idTarefa);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:4000/tarefas/apagar", {
        data: { id },
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.error("Não foi possível excluir a tarefa", error);
    }
  };

  return (
    <>
      <ContainerPaiLembretes>
        {tarefasOrdenadas.map((tarefa) => (
          <ContainerLembretes key={tarefa.id_tarefa}>
            <InformacoesLembretes>
              <Container>
                <H2>{tarefa.nome_tarefa}</H2>
                <Prazos>
                  <H4>PRAZO:</H4>
                  <P>{tarefa.data_fim}</P>
                </Prazos>
                <Prazos>
                  <H4>HORÁRIO INICIAL:</H4>
                  <P>{tarefa.hora_inicio}</P>
                </Prazos>
                <Prazos>
                  <H4>HORÁRIO FINAL:</H4>
                  <P>{tarefa.hora_fim}</P>
                </Prazos>
              </Container>
              <ContainerCheckbox>
                <Checkbox type="checkbox" />
                <H4Checkbox>FINALIZADO</H4Checkbox>
              </ContainerCheckbox>
            </InformacoesLembretes>
            <DescricaoLembretes>
              <TextBox>
                {tarefa.categoria !== "" && (
                  <LinkTextBox href="#">{tarefa.categoria}</LinkTextBox>
                )}
                {tarefa.importancia !== "" && (
                  <PPrioridade prioridade={tarefa.importancia}>
                    {tarefa.importancia}
                  </PPrioridade>
                )}
              </TextBox>
              <DescricaoDetalhada>
                <P>
                  <strong style={{ fontSize: "13px" }}>Descrição: </strong>
                  {tarefa.descricao}
                </P>
              </DescricaoDetalhada>
            </DescricaoLembretes>

            <EditarExcluir>
              <StyledIcon
                icon={faTrash}
                onClick={() => openModal(tarefa.id_tarefa)}
              />
              <StyledIcon icon={faPencilAlt} />
            </EditarExcluir>
          </ContainerLembretes>
        ))}
      </ContainerPaiLembretes>
      {showModal && (
        <ModalExclusao
          isOpen={true}
          closeModal={closeModal}
          handleExclusao={() => handleDelete(tarefaSelecionada)}
        />
      )}
    </>
  );
};

export default Tarefa;
