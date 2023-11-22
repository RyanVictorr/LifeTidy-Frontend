import { useEffect, useState } from "react";
import axios from "axios";
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
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function fetchTarefas() {
      try {
        const token = localStorage.getItem("token"); // Recupera o token do localStorage

        const response = await axios.get(
          "http://localhost:4000/tarefas/buscarTarefas",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTarefas(response.data); // Atualiza o estado com as tarefas recebidas do backend
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    }

    fetchTarefas(); // Chama a função para buscar as tarefas quando o componente é montado
  }, []); // O array vazio como segundo argumento faz com que o useEffect execute apenas uma vez, quando o componente é montado

  return (
    <ContainerPaiLembretes>
      {tarefas.map((tarefa) => (
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
              {tarefa.categoria !== "" && ( // Verifica se categoria não é vazio
                <LinkTextBox href="#">{tarefa.categoria}</LinkTextBox>
              )}
              {tarefa.importancia !== "" && ( // Verifica se importancia não é vazio
                <PPrioridade prioridade={tarefa.importancia}>
                  {tarefa.importancia}
                </PPrioridade>
              )}
            </TextBox>
            <DescricaoDetalhada>
              <P><strong style={{ fontSize: '13px' }}>Descrição: </strong>{tarefa.descricao}</P>
            </DescricaoDetalhada>
          </DescricaoLembretes>
          <EditarExcluir>
            <StyledIcon icon={faTrash} />
            <StyledIcon icon={faPencilAlt} />
          </EditarExcluir>
        </ContainerLembretes>
      ))}
    </ContainerPaiLembretes>
  );
};

export default Tarefa;
