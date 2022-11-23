import { Router } from 'express';

import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import listSpecificationController from '../modules/cars/useCases/listSpecifications';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post('/', createSpecificationController.handle);

specificationsRoutes.get('/', (req, res) => {
  return listSpecificationController().handle(req, res);
});

export { specificationsRoutes };
