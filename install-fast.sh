#!/bin/bash

echo "🚀 Instalação Rápida - Todo App"
echo "================================"

# Verificar se yarn está instalado
if ! command -v yarn &> /dev/null; then
    echo "❌ Yarn não encontrado. Instalando..."
    npm install -g yarn
fi

# Configurar cache do yarn
yarn config set cache-folder .yarn-cache

echo "📦 Instalando dependências da raiz..."
yarn install --frozen-lockfile

echo "📦 Instalando dependências do front-end..."
cd front-end
yarn install --frozen-lockfile
cd ..

echo "📦 Instalando dependências do back-end..."
cd back-end
yarn install --frozen-lockfile
cd ..

echo "✅ Instalação concluída!"
echo "🚀 Execute: npm run dev:fast" 