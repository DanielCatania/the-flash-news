import styled from "styled-components";

const Contents = styled.section`
  width: 95%;

  main {
    display: grid;
    grid-template-columns: 33% 33% 33%;

    h2 {
      font-size: ${({theme}) => theme.fonts.fh5.size};
      font-weight: ${({theme}) => theme.fonts.fh5.weight};
    }

    p {
      font-size: ${({theme}) => theme.fonts.fs.size};
      font-weight: ${({theme}) => theme.fonts.fs.weight};
    }

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Contents;
