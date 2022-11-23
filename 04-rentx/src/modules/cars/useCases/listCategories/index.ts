import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export default (): ListCategoriesController => {
  const categoriesRepository = null;
  const listCategoryUseCase = new ListCategoriesUseCase(categoriesRepository);
  const listCategoryController = new ListCategoriesController(
    listCategoryUseCase,
  );
  return listCategoryController;
};
