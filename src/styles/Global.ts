import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
  }

  *{
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-light']};
  }

  body, input, textarea {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    color: ${(props) => props.theme['gray-03']};
    background: ${(props) => props.theme['gray-01']};
  }
`
