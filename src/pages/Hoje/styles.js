import styled from "styled-components";
export const AppBody = styled.div`
  height: 100%;
  background-color: #0a3950;
`;
export const ContainerMainPrincipalHoje = styled.div`
display: flex;
`;
export const Main= styled.div`
display: flex;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
    left: 0;
    transition: 0.6s ease;
    transition-property: left;
    justify-content: space-evenly;
   
`;

export const ContainerSubEsquerda = styled.div`
background-color: #D9D9D9;
padding: 10px;
border-radius: 15px;
margin: 10px 5px;
height: 730px;
min-width: 346px;
`;
export const ContainerSubDireita = styled.div`
max-width: 750px;
margin-left: 0;
background-color: #D9D9D9;
    padding: 10px;
    border-radius: 15px;
    margin: 10px 5px;
    height: 730px;
    min-width: 346px;
    
`;
export const ContainerSubBaixo = styled.div`
background-color: #D9D9D9;
padding: 10px;
border-radius: 15px;
margin: 10px 5px;
height: 730px;
min-width: 346px;
`;
export const ContainerHoje=styled.div`
align-items: flex-start;
height: 100%;
    display: flex;
    flex-direction: column;
`;
export const PPrioridadeUrgente=styled.div`
height: 44px;
    width: 133px;
    font-size: 20px;
    background-color: #EA4335;
        color: #FFF;
    justify-content: center;
    margin: 0;
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 22px;
    
`;

export const ContainerBorda = styled.div`
margin-top: 0.5em;
margin: 1em 0;
    width: 100%;
    height: 3px;
    background-color: #0A3950;
`;
export const ContainerTarefa = styled.div`
height: 90%;
background-color: #A8A3A3;
padding: 10px 5px;
margin: 0;
border-radius: 25px;
min-height: 300px;
max-height: 534px;
overflow-y: scroll;
min-width: 300px;
`;
export const PPrioridadeRegular=styled.div`
height: 44px;
    width: 133px;
    font-size: 20px;
    background-color: #1B0BD7;
        color: #FFF;
    justify-content: center;
    margin: 0;
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 22px;
    
`;
export const PPrioridadeBaixa=styled.div`
height: 44px;
    width: 133px;
    font-size: 20px;
    background-color: #13F300;
        color: #FFF;
    justify-content: center;
    margin: 0;
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 22px;
    
`;