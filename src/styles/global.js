import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #111;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;  
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }
`