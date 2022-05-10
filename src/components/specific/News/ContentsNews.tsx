import styled from "styled-components";

const Contents = styled.section`
  display: flex;
  flex-direction: column;

  border: 0.5px solid ${({theme}) => theme.colors.neutral.c100};
  border-radius: 15px;
  box-shadow: 5px 5px 5px ${({theme}) => theme.colors.neutral.c100};
  color: black;
  margin: 1em;

  img {
    border-radius: 15px;
    width: 90%;
    margin: 1em auto;
  }

  div {
    padding: 1em;
  }

  ul {
    list-style: none;
  }
`;

export default Contents;
