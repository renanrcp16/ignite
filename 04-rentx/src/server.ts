import 'reflect-metadata';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import swaggerUI from 'swagger-ui-express';

import { AppError } from './errors/AppError';

import './database';
import './shared/container';

import { handleErrors } from './middlewares/handleErrors';
import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(router);

app.use(handleErrors);

app.listen(3333, () =>
  console.log('\nServer running at http://localhost:3333'),
);
