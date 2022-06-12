import styled from "styled-components";

const Contents = styled.section`
  /* posicionamento */
  display: flex;
  flex-direction: column;

  img {
    /* estilo */
    border-radius: 15px;

    /* espaçamento */
    margin: 1em auto;

    /* tamanho */
    width: 90%;
  }

  /* espaçamento */
  div {
    padding: 1em;
  }

  /* estilo */
  ul {
    list-style: none;
  }
`;

export default Contents;
