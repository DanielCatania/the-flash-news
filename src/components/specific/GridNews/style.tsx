import styled from "styled-components";

const Style = styled.section`
  /* tamanho */
  width: 95%;

  main {
    /* posicionamento */
    display: grid;
    grid-template-columns: 33% 33% 33%;

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
    /* fonte */
    h2 {
      font-size: ${({theme}) => theme.fonts.fh5.size};
      font-weight: ${({theme}) => theme.fonts.fh5.weight};
    }

    p {
      font-size: ${({theme}) => theme.fonts.fs.size};
      font-weight: ${({theme}) => theme.fonts.fs.weight};
    }
  }
`;

export default Style;
