import { Specification } from '../entities/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO);
  list(): Specification[];
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
