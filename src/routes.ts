import { Request, Response } from "express";

import jokesApi from "./api/config";

const { Router } = require('express');

const routes = Router();

routes.get('/', async (req: Request, res: Response) => {
  try {
    const apiResponse = await jokesApi.get('https://v2.jokeapi.dev/joke/Programming?amount=10'); // Replace with the actual API URL.
    const jokes = apiResponse.data.jokes; // Assuming the API response contains an array of jokes.
    res.render('jokes', { jokes });
  } catch (error) {
    console.error('Error fetching jokes:', error);
    res.status(500).send('Error fetching jokes');
  }
});

export default routes;