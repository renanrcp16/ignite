import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
// import importCategoryController from '../modules/cars/useCases/importCategory';
// import listCategoryController from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);
// categoriesRoutes.get('/', listCategoryController.handle);
// categoriesRoutes.post('/import', importCategoryController.handle);

export { categoriesRoutes };
