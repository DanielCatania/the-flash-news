import styled from "styled-components";

const Card = styled.div`
  border: 0.5px solid ${({theme}) => theme.colors.neutral.c100};
  border-radius: 15px;
  box-shadow: 5px 5px 5px ${({theme}) => theme.colors.neutral.c100};
  color: black;
  margin: 1em;
`;

export default Card;
