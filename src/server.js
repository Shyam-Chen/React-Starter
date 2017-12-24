import { join } from 'path';
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import history from 'express-history-api-fallback';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(compression());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
  const root = join(__dirname, '../build');

  app.use(express.static(root));
  app.use(history('index.html', { root }));
}

const api = app.listen(app.get('port'), (): void => {
  console.log('App: Bootstrap Succeeded.');
  console.log(`Port: ${app.get('port')}.`);
});

export default api;
