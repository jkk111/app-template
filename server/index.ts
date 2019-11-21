import { createApp } from './helpers';
import { logger } from './utils';

const { LISTEN_PORT } = process.env;

const app = createApp();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

app.listen(LISTEN_PORT, () => {
  logger.info('Listening on port: %d', LISTEN_PORT);
});
