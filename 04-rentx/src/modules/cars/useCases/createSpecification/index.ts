import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

export default (): CreateSpecificationController => {
  const specificationsRepository = null;
  const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationsRepository,
  );
  const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase,
  );

  return createSpecificationController;
};
