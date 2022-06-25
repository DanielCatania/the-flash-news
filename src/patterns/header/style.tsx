import styled from "styled-components";

const Style = styled.header`
  /* cor */
  background-color: ${({theme}) => theme.colors.primary.c300};

  h1 {
    /* cor */
    color: ${({theme}) => theme.colors.primary.c50};
  }
`;

export default Style;
