import styled from "styled-components";

const Subtitle = styled.h2`
  /* cor */
  color: ${({theme}) => theme.colors.primary.c200};

  /* fonte */
  font-size: ${({theme}) => theme.fonts.fh3.size};
  font-weight: ${({theme}) => theme.fonts.fh3.weight};
`;

export default Subtitle;
