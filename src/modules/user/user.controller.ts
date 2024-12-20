import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { MongoIdSchemaType } from '../../common/common.schema';
import { errorResponse, successResponse } from '../../utils/api.utils';
import { generateRandomPassword } from '../../utils/auth.utils';
import { CreateUserSchemaType, GetUsersSchemaType } from './user.schema';
import { createUser, deleteUser, getUsers } from './user.services';

export const handleDeleteUser = async (
  req: Request<MongoIdSchemaType, unknown>,
  res: Response,
) => {
  await deleteUser({ id: req.params.id });

  return successResponse(res, 'User has been deleted');
};

export const handleCreateUser = async (
  req: Request<unknown, unknown, CreateUserSchemaType>,
  res: Response,
) => {
  const data = req.body;

  const user = await createUser({
    ...data,
    password: generateRandomPassword(),
    role: 'DEFAULT_USER',
  });

  return successResponse(
    res,
    'Email has been sent to the user',
    user,
    StatusCodes.CREATED,
  );
};

export const handleCreateSuperAdmin = async (
  _: Request<unknown, unknown, unknown>,
  res: Response,
) => {
  const password = 'admin1234';

  const user = await createUser({
    email: 'admin@mail.com',
    name: 'Super Admin',
    password: password,
    role: 'SUPER_ADMIN',
  });

  return successResponse(
    res,
    'Super Admin has been created',
    { email: user.email, password },
    StatusCodes.CREATED,
  );
};

// OLD
// user.controller.ts
export const handleGetUsers = async (
  req: Request<unknown, unknown, unknown, GetUsersSchemaType>,
  res: Response,
) => {
  try {
    const { results, paginatorInfo } = await getUsers(
      // {
      //   id: req.user.sub,
      // },
      req.query,
    );

    return successResponse(res, undefined, { results, paginatorInfo });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return errorResponse(res, error.message || 'Failed to fetch users', 400);
    }
    return errorResponse(res, 'Failed to fetch users', 400);
  }
};
