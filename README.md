# Todo App - Arquitetura Hexagonal

Monorepo com front-end React/TypeScript e back-end JSON Server seguindo princípios da arquitetura hexagonal.

## 📋 Sumário

- [🏗️ Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Como Executar](#-como-executar)
- [🛠️ Tecnologias](#️-tecnologias)
- [📡 Endpoints da API](#-endpoints-da-api)
- [🔐 Autenticação](#-autenticação)
- [📊 Dados Iniciais](#-dados-iniciais)
- [🏗️ Arquitetura Hexagonal](#️-arquitetura-hexagonal)
- [📚 Documentação](#-documentação)

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

### 🐌 Instalação com npm (mais lento)

```bash
# Instalar todas as dependências de uma vez
npm run install:all
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

## 📜 Scripts Disponíveis

- `npm run install:fast` - Instala com yarn (muito mais rápido)
- `npm run install:all` - Instala com npm (mais lento)
- `npm run dev:fast` - Inicia com yarn
- `npm run dev` - Inicia com npm
- `npm run build` - Build do front-end
- `npm run test` - Executa testes E2E com Cypress

## ⚡ Otimizações de Performance

- **Yarn em vez de npm** - Instalação 2-3x mais rápida
- **Cache local** - Dependências cacheadas localmente
- **Dependências otimizadas** - Removidas dependências desnecessárias
- **Frozen lockfile** - Instalação determinística

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

## 📡 Endpoints da API

### Autenticação

- `POST /login` - Login com email
- `POST /logout` - Logout

### Usuários

- `GET /users` - Listar usuários

### Todos

- `GET /todos` - Listar todos (apenas visíveis)
- `POST /todos` - Criar todo
- `PUT /todos/:id` - Atualizar todo
- `DELETE /todos/:id` - Soft delete (marca como não visível)

## 🔐 Autenticação

Todas as rotas (exceto login/logout) requerem token JWT no header:

```
Authorization: Bearer <token>
```

## 📊 Dados Iniciais

O `db.json` contém dados de exemplo:

- 2 usuários
- 3 todos (1 completo, 2 pendentes)

## 🏗️ Arquitetura Hexagonal

O front-end segue a arquitetura hexagonal com 4 camadas:

1. **Domain**: Entidades e regras de negócio
2. **Application**: Casos de uso
3. **Infrastructure**: Adaptadores externos (API, localStorage, etc.)
4. **Presentation**: Componentes React

### Aliases Configurados

- `@domain/*` → `src/domain/*`
- `@application/*` → `src/application/*`
- `@infrastructure/*` → `src/infrastructure/*`
- `@presentation/*` → `src/presentation/*`

## 📚 Documentação

- [📋 Front-end](./front-end/README.md) - Documentação detalhada do front-end
- [🔧 Back-end](./back-end/README.md) - Documentação do back-end
- [🎨 Sistema de Botões](./front-end/docs/components/buttons.md) - Documentação dos componentes de botões
