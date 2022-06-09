import styled from "styled-components";

const Contents = styled.section`
  width: 85%;
  display: grid;
  grid-template-columns: 60% 40%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export default Contents;
