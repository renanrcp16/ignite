import { ListSpecificationsController } from './ListSpecificationsController';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

export default () => {
  const specificationsRepository = null;
  const listSpecificationUseCase = new ListSpecificationsUseCase(
    specificationsRepository,
  );
  const listSpecificationController = new ListSpecificationsController(
    listSpecificationUseCase,
  );

  return listSpecificationController;
};
