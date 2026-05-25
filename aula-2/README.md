## Setup

```bash
node --version
```
v24.14.1


Inicializa projeto node
```bash
npm init -y
```


Installa dependencias de desenvolvimento
```bash
npm install -D typescript @types/node
```


Cria tsconfig
```bash
npx tsc --init
```


Setup tsconfig with
https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping

change the package.json

"type": "module",

