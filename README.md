# 😄 Joke API

Servidor **Express + TypeScript** que consome a [JokeAPI](https://v2.jokeapi.dev/) e renderiza no navegador (EJS) uma lista de 10 piadas de programação a cada acesso.

## Como funciona

`GET /` busca `https://v2.jokeapi.dev/joke/Programming?amount=10` com Axios e envia o resultado para a view [`jokes.ejs`](src/views/jokes.ejs).

## Tecnologias

Node.js · Express · TypeScript · EJS · Axios

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000 (ou defina PORT)
npm run build    # compila para dist/
```

## Autor

Feito por [Amós Magalhães](https://github.com/amslimaa).
