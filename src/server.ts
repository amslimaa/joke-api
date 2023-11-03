import express from 'express';
import routes from './routes';

const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));
app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port} 🔥🚀`)
})