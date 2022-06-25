import styled from "styled-components";

const Style = styled.section`
  /* tamanho */
  width: 85%;

  /* posicionamento */
  display: grid;
  grid-template-columns: 60% 40%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export default Style;
