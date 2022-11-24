import { AppError } from '../../../../errors/AppError';
import { ICreatedUserDTO } from '../../dtos/ICreateUserDTO';
import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let authenticatedUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate user', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticatedUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory,
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to authenticate an user', async () => {
    const user: ICreatedUserDTO = {
      driver_license: '000123',
      email: 'user@domin.com',
      password: '1234',
      name: 'User Test',
    };

    await createUserUseCase.execute(user);

    const result = await authenticatedUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });

  it('shout not be able to authenticate a nonexistent user', () => {
    expect(async () => {
      await authenticatedUserUseCase.execute({
        email: 'invalid@domain.com',
        password: '1234',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('shout not be able to authenticate with incorrect password', () => {
    expect(async () => {
      const user: ICreatedUserDTO = {
        driver_license: '9999',
        email: 'valid@domain.com',
        password: '1234',
        name: 'User Test',
      };

      await createUserUseCase.execute(user);

      await authenticatedUserUseCase.execute({
        email: user.email,
        password: '4321',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
