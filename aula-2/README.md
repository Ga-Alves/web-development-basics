## Setup

Antes de começar, verifique se instalou a versão correta do node.

```bash
node --version
```

v24.14.1

Depois, inicialize o projeto com o comando

```bash
npm init -y
```

Este comando ira gerar o arquivo `package.json`.

Depois, será necessário instalar as dependências de desenvolvimento (typescript e tipagem do node.js).

```bash
npm install -D typescript @types/node
```

## Configurar Typescript

O javascript é uma linguagem de tipagem fraca. Para evitar erros relacionado a tipagem adicionamos uma camada de tipagem no JS conhecida como TS.

Execute o comando

```bash
npx tsc --init
```

para gerar o arquivo de configuração do Typescript e depois altere o `tsconfig.json` editando as seguintes configurações.

```json
{
  "compilerOptions": {
    "lib": ["ES2024"],
    "module": "nodenext",
    "target": "ES2024",
    "verbatimModuleSyntax": false
  }
}
```

Por fin, modifique em `package.json` o tipo do pacote.

```json
"type": "module",
```
### Async functions

Introduzir Async funcitons.

## Testar primeira requisição HTTP

Para rodar o server basta executar

```bash
node ./src/server.ts
```

Depois abra a página http://localhost:3000/. Você deve ver uma mensagem de Hello World!.

## Parse de json
Teste fazer uma requisicao POST com json no body sem utilizar o parser de json.

Depois adicione o parser
```bash
app.use(express.json());
```

## Criar router

Codigo em um so arquivo nao eh muito escalavel.
Vamos separar por contextos com routers.

## Adicionar um middleware apenas para o router

Adicione um middleware de log para o router.