import styled from "styled-components";

const Title = styled.h1`
  /* cor */
  color: ${({theme}) => theme.colors.primary.c300};

  /* fonte */
  font-size: ${({theme}) => theme.fonts.fh1.size};
  font-weight: ${({theme}) => theme.fonts.fh1.weight};
`;

export default Title;
