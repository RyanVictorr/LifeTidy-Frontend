
import { useAuth } from "../../contexts/AuthContext";

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
  const { tarefas } = useAuth();

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
