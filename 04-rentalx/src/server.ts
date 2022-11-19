import express from 'express';
import swaggerUI from 'swagger-ui-express';

import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());
app.use(router);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.listen(3333, () =>
  console.log('\nServer running at http://localhost:3333'),
);
