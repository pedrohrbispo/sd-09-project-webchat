
# Boas vindas ao repositório do projeto WebChat!

Olá, este é um dos projetos do modulo de BackEnd da TRYBE, consiste em desenvolver um webchat utilizando a camada de view, para renderizar as páginas html, e socket.io, para fazer a comunicação entre os clientes.

# Habilidades

- Conseguir desenvolver um server socket usando o socket.io;

- Emitir eventos personalizados usando o socket.io;

- Usar o pacote `socket.io` do Node.js para criar aplicações que trafeguem mensagens através de sockets.

## O que deverá ser desenvolvido
Neste projeto você vai encontrar um _chat_ online e ao utilizar essa aplicação um usuário deverá ser capaz de:

 - Usar um front-end para enviar mensagens a clientes conectados;
 - Visualizar o histórico de mensagens da conversa;
 - Visualizar os usuários online no momento;
 - Alterar o nome de usuário no chat em tempo real;
 - Ao mudar o nome de usuario, o historico de mensagens também muda

## 🗒 Para rodar a aplicação

1. Clone o repositório

   - `git@github.com:pedrohrbispo/sd-09-project-webchat.git`.
   - Entre na pasta do repositório que você acabou de clonar:
     - `cd sd-09-project-webchat`

2. Rode o npm install:
   - Certifique-se que o node.js está instalado na sua maquina, assim como o banco de dados MongoDB

3. Crie o arquivo .env para colocar as informações de acesso do seu banco de dados:
  DB_URL=mongodb://localhost:27017/webchat/    // conexão local com o seu MongoDB
  DB_NAME=webchat                             // nome do database

4. Rode o npm start

   - A aplicação irá rodar na porta 3000


## Linter (Análise Estática)

Para garantir a qualidade do código, usaremos o [ESLint](https://eslint.org/) para fazer a sua análise estática.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json` nos seguintes caminhos:

- `sd-09-project-webchat/package.json`

Para poder rodar os `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você também pode instalar o plugin do `ESLint` no `VSCode`, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
