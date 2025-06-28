# Frontend - Todo App com Arquitetura Hexagonal

Este é o frontend da aplicação Todo desenvolvido com React, TypeScript e seguindo os princípios da Arquitetura Hexagonal.

## 📋 Sumário

- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Como Executar](#-como-executar)
- [📚 Documentação dos Componentes](#-documentação-dos-componentes)
- [🏗️ Arquitetura](#️-arquitetura)
- [🧪 Testes](#-testes)
- [🎨 UI/UX](#-uiux)
- [📦 Tecnologias](#-tecnologias)
- [📝 Convenções](#-convenções)
- [📚 Documentação](#-documentação)

## 📚 Documentação

- [🏠 README Principal](../README.md) - Documentação geral do projeto
- [🔧 Back-end](../back-end/README.md) - Documentação do back-end
- [🎨 Sistema de Botões](./docs/components/buttons.md) - Documentação completa do sistema de botões

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

- [🎨 Sistema de Botões](./docs/components/buttons.md) - Documentação completa do sistema de botões

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

## 📝 Convenções

- **Nomenclatura**: PascalCase para componentes, camelCase para funções
- **Imports**: Imports absolutos usando `@/`
- **Estilos**: Styled Components com arquivos `.style.ts`
- **Testes**: Arquivos `.test.tsx` na pasta `__tests__`
- **Tipos**: Arquivos `.types.ts` separados dos componentes
