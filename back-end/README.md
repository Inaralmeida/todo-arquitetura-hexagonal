# Back-end - Todo App

Servidor JSON Server com autenticação JWT para a aplicação Todo.

## 📋 Sumário

- [🏗️ Estrutura](#️-estrutura)
- [🚀 Como Executar](#-como-executar)
- [📡 Endpoints](#-endpoints)
- [🔐 Autenticação](#-autenticação)
- [📊 Dados](#-dados)
- [🛠️ Tecnologias](#️-tecnologias)
- [📚 Documentação](#-documentação)

## 🏗️ Estrutura

```
back-end/
├── package.json
├── server.js          # Servidor Express + JSON Server
├── db.json           # Dados iniciais
└── yarn.lock
```

## 🚀 Como Executar

```bash
# 📦 Instalar dependências
npm install

# 🚀 Executar servidor
npm start

# ⚡ Executar em modo desenvolvimento
npm run dev
```

O servidor será iniciado na porta **3009**.

## 📡 Endpoints

### 🔐 Autenticação

#### POST /login

Login com email e senha.

**Request:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "Usuário Exemplo"
  }
}
```

#### POST /logout

Logout do usuário (invalida o token).

### 👥 Usuários

#### GET /users

Lista todos os usuários (requer autenticação).

### ✅ Todos

#### GET /todos

Lista todos os todos visíveis do usuário autenticado.

#### POST /todos

Cria um novo todo.

**Request:**

```json
{
  "title": "Nova tarefa",
  "description": "Descrição da tarefa",
  "completed": false
}
```

#### PUT /todos/:id

Atualiza um todo existente.

#### DELETE /todos/:id

Soft delete - marca o todo como não visível.

## 🔐 Autenticação

Todas as rotas (exceto `/login` e `/logout`) requerem token JWT no header:

```
Authorization: Bearer <token>
```

### 🔧 Middleware de Autenticação

O servidor inclui middleware que:

- 🔍 Verifica o token JWT
- 👤 Adiciona o usuário ao request
- 🎯 Filtra dados por usuário

## 📊 Dados

### 📋 Estrutura do db.json

```json
{
  "users": [
    {
      "id": 1,
      "email": "user@example.com",
      "password": "password123",
      "name": "Usuário Exemplo"
    }
  ],
  "todos": [
    {
      "id": 1,
      "title": "Tarefa completa",
      "description": "Esta tarefa está completa",
      "completed": true,
      "userId": 1,
      "visible": true,
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

### 📈 Dados Iniciais

O `db.json` contém:

- 👥 2 usuários de exemplo
- ✅ 3 todos (1 completo, 2 pendentes)

## 🛠️ Tecnologias

- **📊 JSON Server**: API REST automática
- **🚀 Express**: Framework web
- **🔐 jsonwebtoken**: Autenticação JWT
- **🌍 cors**: Cross-Origin Resource Sharing
- **🔒 bcryptjs**: Hash de senhas

## 📚 Documentação

- [🏠 README Principal](../README.md) - Documentação geral do projeto
- [📋 Front-end](../front-end/README.md) - Documentação do front-end
