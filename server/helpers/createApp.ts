import bodyParser from 'body-parser';
import express from 'express';
import loggerMiddleware from '../middleware/logger';

const createApp = (): express.Application => {
  const app = express();

  app.use(
    bodyParser.json({
      limit: '100kb',
    })
  );

  app.use(loggerMiddleware);

  return app;
};

export default createApp;
