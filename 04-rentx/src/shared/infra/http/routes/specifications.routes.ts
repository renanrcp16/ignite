import { Router } from 'express';

import { CreateSpecificationController } from '../../../../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
// import { ListSpecificationsController } from '../modules/cars/useCases/listSpecifications/ListSpecificationsController';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
// const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post('/', createSpecificationController.handle);
// specificationsRoutes.get('/', listSpecificationsController.handle);

export { specificationsRoutes };
