import { join } from 'path';
import express from 'express';
import redis from 'redis';
import bluebird from 'bluebird';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import history from 'express-history-api-fallback';

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('redis-port', process.env.REDIS_PORT || 6379);
app.set('redis-host', process.env.REDIS_HOST || '127.0.0.1');
app.set('redis-key', process.env.REDIS_KEY);

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient(
  app.get('redis-port'),
  app.get('redis-host'),
  {
    'auth_pass': app.get('redis-key'),
    'return_buffers': true
  }
);

client.on('error', err => console.error(err));

app.use(compression());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const root = join(__dirname, 'build');

app.use(express.static(root));
app.use(history('index.html', { root }));

const api = app.listen(app.get('port'), (): void => {
  console.log('App: Bootstrap Succeeded.');
  console.log(`Port: ${app.get('port')}.`);
});

export default api;
