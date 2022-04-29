import styled from "styled-components";

const Footer = styled.footer`
  /* cor */
  background-color: ${({theme}) => theme.colors.primary.c300};
  color: ${({theme}) => theme.colors.primary.c100};

  /* fonte */
  font-size: ${({theme}) => theme.fonts.fs.size};
  font-weight: ${({theme}) => theme.fonts.fs.weight};

  ul {
    /* estilo */
    list-style: none;

    /* tamanho */
    width: 30%;
  }

  ul li a {
    /* cor */
    color: inherit;

    /* fonte */
    font-size: inherit;
    font-weight: inherit;

    /* estilo */
    text-decoration: underline;
  }
`;

export default Footer;
