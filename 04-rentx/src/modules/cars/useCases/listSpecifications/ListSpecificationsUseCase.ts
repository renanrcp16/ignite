import { Specification } from '@modules/cars/entities/Specification';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationsRepository.list();
    return specifications;
  }
}

export { ListSpecificationsUseCase };
