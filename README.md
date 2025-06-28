# Todo App - Arquitetura Hexagonal

Monorepo com front-end React/TypeScript e back-end JSON Server seguindo princípios da arquitetura hexagonal.

## 📋 Sumário

- [🏗️ Estrutura do Projeto](#️-estrutura-do-projeto)
- [🚀 Como Executar](#-como-executar)
- [🛠️ Tecnologias](#️-tecnologias)
- [📚 Documentação](#-documentação)
  - [📋 Front-end](./front-end/README.md)
  - [🔧 Back-end](./back-end/README.md)

## 📁 Estrutura do Projeto

```
todo-arquitetura-exagonal/
├── package.json (raiz - com script dev)
├── front-end/
│   ├── package.json
│   ├── vite.config.ts (porta 3008)
│   ├── tsconfig.json (com aliases)
│   ├── cypress.config.ts (baseUrl: 3008)
│   └── src/
│       ├── domain/ (entidades e regras de negócio)
│       ├── application/ (casos de uso)
│       ├── infrastructure/ (adaptadores externos)
│       └── presentation/ (componentes React)
└── back-end/
    ├── package.json
    ├── server.js (porta 3009)
    └── db.json (dados iniciais)
```

## 🚀 Como Executar

### ⚡ Instalação Super Rápida (Recomendado)

```bash
# Usando yarn (muito mais rápido)
npm run install:fast

# Ou execute o script bash
chmod +x install-fast.sh
./install-fast.sh
```

### Execução

```bash
# Com yarn (mais rápido)
npm run dev:fast

# Com npm
npm run dev
```

Isso irá iniciar:

- Front-end na porta 3008
- Back-end na porta 3009

## 🛠️ Tecnologias

### Front-end

- React 18 + TypeScript
- Vite (porta 3008)
- Styled Components
- Axios
- Luxon
- React Icons
- Cypress (E2E)

### Back-end

- JSON Server (porta 3009)
- Express
- JWT para autenticação
- CORS habilitado
