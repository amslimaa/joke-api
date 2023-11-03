import axios from "axios";

const jokesApi = axios.create({
  baseURL: "https://v2.jokeapi.dev/joke/Programming?amount=10"
});

export default jokesApi;