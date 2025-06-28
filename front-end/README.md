# Frontend - Todo App com Arquitetura Hexagonal

Este é o frontend da aplicação Todo desenvolvido com React, TypeScript e seguindo os princípios da Arquitetura Hexagonal.

## 📁 Estrutura do Projeto

```
src/
├── application/           # Casos de uso da aplicação
├── domain/               # Entidades e regras de negócio
├── infrastructure/       # Adaptadores externos (API, localStorage, etc.)
├── presentation/         # Interface do usuário
│   ├── components/       # Componentes reutilizáveis
│   ├── pages/           # Páginas da aplicação
│   ├── routes/          # Configuração de rotas
│   └── style/           # Estilos globais e tema
└── main.tsx             # Ponto de entrada da aplicação
```

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Executar testes E2E
npm run cypress:open
```

## 📚 Documentação dos Componentes

A documentação detalhada dos componentes está disponível na pasta `docs/`:

- [📋 Sistema de Botões](./docs/components/buttons.md) - Documentação completa do sistema de botões

## 🏗️ Arquitetura

### Princípios Aplicados

- **Arquitetura Hexagonal**: Separação clara entre domínio, aplicação, infraestrutura e apresentação
- **SOLID**: Princípios de design orientado a objetos
- **DDD**: Domain-Driven Design para organização do código
- **Clean Code**: Código limpo e legível

### Camadas

1. **Domain**: Contém as entidades e regras de negócio
2. **Application**: Casos de uso que orquestram as operações
3. **Infrastructure**: Adaptadores para APIs, localStorage, etc.
4. **Presentation**: Interface do usuário e componentes

## 🧪 Testes

- **Testes Unitários**: Jest + Testing Library
- **Testes E2E**: Cypress
- **Cobertura**: Relatórios de cobertura automáticos

## 🎨 UI/UX

- **Styled Components**: Estilização baseada em componentes
- **Tema**: Sistema de design consistente
- **Acessibilidade**: Componentes acessíveis com ARIA labels
- **Responsivo**: Design adaptável para diferentes dispositivos

## 📦 Tecnologias

- **React 18**: Biblioteca para interfaces
- **TypeScript**: Tipagem estática
- **Styled Components**: CSS-in-JS
- **React Router**: Navegação
- **Axios**: Cliente HTTP
- **Vite**: Build tool e dev server

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview da build
npm run lint         # Linting do código
npm run cypress:open # Abrir Cypress
npm run cypress:run  # Executar testes E2E
```

## 📝 Convenções

- **Nomenclatura**: PascalCase para componentes, camelCase para funções
- **Imports**: Imports absolutos usando `@/`
- **Estilos**: Styled Components com arquivos `.style.ts`
- **Testes**: Arquivos `.test.tsx` na pasta `__tests__`
- **Tipos**: Arquivos `.types.ts` separados dos componentes

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

