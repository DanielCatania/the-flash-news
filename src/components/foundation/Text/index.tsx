import styled from "styled-components";

const Text = styled.p`
  font-size: ${({theme}) => theme.fonts.fp.size};
  font-weight: ${({theme}) => theme.fonts.fp.weight};

  @media screen and (max-width: 768px) {
    font-size: ${({theme}) => theme.fonts.fs.size};
    font-weight: ${({theme}) => theme.fonts.fs.weight};
  }
`;

export default Text;
