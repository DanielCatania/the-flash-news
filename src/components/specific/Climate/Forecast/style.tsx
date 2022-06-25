import styled from "styled-components";

const Style = styled.li`
  /* tamanho */
  width: 30%;

  /* fonte */
  p {
    font-size: ${({theme}) => theme.fonts.fs.size};
  }
`;

export default Style;
