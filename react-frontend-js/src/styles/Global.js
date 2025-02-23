import { css } from "@emotion/react"

export const colors = {
  black: '#000',
  white: '#fff',
  gray: '#ccc',
  /*light colors*/
  softWhite: '#f8f8f8',
  cream: '#f5f5dc',
  pastelBlue: '#e0f2f7',
  mintGreen: '#e8f5e9',
  lightYellow: '#fff9c4',
  tomato: '#ff6f61',
  blueAlpha: 'rgba(5, 85, 233, 0.8)',
  /*dark colors*/
  darkGray: '#333',
  midnightBlue: '#192734',
  darkPurple: '#4a148c',
  mossGreen: '#43a047',
  redTomato: '#ff3b2f',
}

export const globalStyles = css`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    /* Remove margem padrão do body */
    margin: 0;
    font-size: 1rem;
    color: ${colors.black};
    background: ${colors.cream};
    /* Fonte do sistema - mais performática */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  dl,
  dt,
  dd,
  blockquote,
  pre,
  figure,
  figcaption {
    margin: 0;
    padding: 0;
  }

  img,
  video {
    /* Impede que imagens e vídeos ultrapassem a largura do contêiner */
    max-width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    /* Herda a fonte do body */
    font-family: inherit;
    font-size: 1rem;
    /* Garante que padding e border não afetem a largura */
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    background: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  fieldset,
  legend {
    margin: 0;
    padding: 0;
    border: 0;
  }

  code {
    font-family: 'Courier New', monospace;
  }
`
