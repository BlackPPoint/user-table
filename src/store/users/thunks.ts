import { createAsyncThunk } from '@reduxjs/toolkit'

import { randomuser } from '../../utils'
import { IUser } from '../../models';

export const generate = createAsyncThunk(
  'users.generate',
  async (count: number) => {
    const users = await randomuser(count)
    return users
  }
)

export const createUser = createAsyncThunk(
  'users.create',
  async (count: number) => {
    return await randomuser(count)
  }
)

export const updateUser = createAsyncThunk(
  'users.update',
  async (userData: IUser) => {
    await randomuser(1)
    return userData
  }
)

export const deleteUser = createAsyncThunk(
  'users.delete',
  async (userData: IUser) => {
    await randomuser(1) // вместо запроса на удаление
    return userData.login.uuid
  }
)
