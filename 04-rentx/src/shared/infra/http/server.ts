import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import swaggerUI from 'swagger-ui-express';

import '../typeorm';
import '../../container';

import swaggerFile from '../../../swagger.json';
import { handleErrors } from './middlewares/handleErrors';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(router);

app.use(handleErrors);

app.listen(3333, () =>
  console.log('\nServer running at http://localhost:3333'),
);
