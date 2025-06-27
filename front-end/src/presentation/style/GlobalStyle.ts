import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.gray[900]};
    background-color: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  h1 { font-size: 2.25rem; }
  h2 { font-size: 1.875rem; }
  h3 { font-size: 1.5rem; }
  h4 { font-size: 1.25rem; }
  h5 { font-size: 1.125rem; }
  h6 { font-size: 1rem; }

  /* Parágrafos */
  p {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.gray[700]};
  }

  /* Links */
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 150ms ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryHover};
      text-decoration: underline;
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
    }
  }

  /* Listas */
  ul, ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.25rem;
  }

  /* Botões */
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  /* Inputs */
  input, textarea, select {
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.5;

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
    }
  }

  /* Imagens */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Tabelas */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;
  }

  th, td {
    padding: 0.5rem 1rem;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
  }

  th {
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }

  /* Código */
  code {
    font-family: 'Fira Code', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'Courier New', monospace;
    font-size: 0.875em;
    background-color: ${({ theme }) => theme.colors.gray[100]};
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors.danger};
  }

  pre {
    font-family: 'Fira Code', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'Courier New', monospace;
    background-color: ${({ theme }) => theme.colors.gray[900]};
    color: ${({ theme }) => theme.colors.gray[100]};
    padding: 1rem;
    border-radius: 0.375rem;
    overflow-x: auto;
    margin-bottom: 1rem;

    code {
      background: none;
      padding: 0;
      color: inherit;
    }
  }

  /* Blockquotes */
  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    padding-left: 1rem;
    margin-bottom: 1rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors.gray[600]};
  }

  /* Horizontal rule */
  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};
    margin: 2rem 0;
  }

  /* Utilitários de acessibilidade */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Scrollbar personalizada */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray[100]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[400]};
    border-radius: 9999px;

    &:hover {
      background: ${({ theme }) => theme.colors.gray[500]};
    }
  }

  /* Seleção de texto */
  ::selection {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  /* Foco visível para navegação por teclado */
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  /* Reduzir movimento para usuários que preferem */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Modo escuro (opcional) */
  @media (prefers-color-scheme: dark) {
    body {
      color: ${({ theme }) => theme.colors.gray[100]};
      background-color: ${({ theme }) => theme.colors.black};
    }

    h1, h2, h3, h4, h5, h6 {
      color: ${({ theme }) => theme.colors.gray[100]};
    }

    p {
      color: ${({ theme }) => theme.colors.gray[300]};
    }

    th {
      background-color: ${({ theme }) => theme.colors.gray[900]};
    }

    code {
      background-color: ${({ theme }) => theme.colors.gray[900]};
    }

    pre {
      background-color: ${({ theme }) => theme.colors.gray[100]};
      color: ${({ theme }) => theme.colors.gray[900]};
    }

    blockquote {
      color: ${({ theme }) => theme.colors.gray[500]};
    }

    hr {
      border-top-color: ${({ theme }) => theme.colors.gray[700]};
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.gray[900]};
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.gray[600]};

      &:hover {
        background: ${({ theme }) => theme.colors.gray[500]};
      }
    }
  }
`;
