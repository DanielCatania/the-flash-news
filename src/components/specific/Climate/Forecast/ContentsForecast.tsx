import styled from "styled-components";

const Contents = styled.li`
  width: 30%;
  p {
    font-size: ${({theme}) => theme.fonts.fs.size};
  }
`;

export default Contents;
