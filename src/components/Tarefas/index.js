
import Descrição from "../../assets/descricao.png";
import{
    ContainerPaiLembretes,
    ContainerLembretes,
    InformacoesLembretes,
    Prazos,
    Checkbox,H4Checkbox,
    DescricaoLembretes,
    TextBox,
    LinkTextBox,
    DescricaoDetalhada,
    IconDescricao,
    EditarExcluir,
    StyledIcon,
    H2,H4,P,ContainerCheckbox,
    PPrioridade,Container
}from "./styles";
import{
    faTrash, faPencilAlt
} from "@fortawesome/free-solid-svg-icons";

const Tarefa = () => {
    return (
      <ContainerPaiLembretes>
        <ContainerLembretes>
          <InformacoesLembretes>
          <Container>
            <H2>TRABALHO DE P.I.</H2>
            <Prazos>
              <H4>PRAZO:</H4>
              <P>24/05/2023</P>
            </Prazos>
            <Prazos>
              <H4>HORÁRIO INICIAL:</H4>
              <P>18:00</P>
            </Prazos>
            <Prazos>
              <H4>HORÁRIO FINAL:</H4>
              <P>20:00</P>
            </Prazos>
            
            </Container>
        
          <ContainerCheckbox>
            <Checkbox type="checkbox" />
            <H4Checkbox>FINALIZADO</H4Checkbox>
            </ContainerCheckbox>
            </InformacoesLembretes>
        <DescricaoLembretes>
          <TextBox>
            <LinkTextBox href="#">ESTUDO</LinkTextBox>
            <PPrioridade>URGÊNCIA</PPrioridade>
          </TextBox>
          <DescricaoDetalhada>
            <IconDescricao src={Descrição} alt="icon-descrição" />
            <P>APRESENTAÇÃO DETALHATA, SOBRE AS TAREFAS REALIZADAS DA SPRINT.</P>
          </DescricaoDetalhada>
        </DescricaoLembretes>
        <EditarExcluir>
        <StyledIcon icon={faTrash} />
        <StyledIcon icon={faPencilAlt} />
        </EditarExcluir>
        </ContainerLembretes>
      </ContainerPaiLembretes>
    );
  };
  
  export default Tarefa;