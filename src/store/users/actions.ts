import { createAction } from '@reduxjs/toolkit'

import { IUser } from '../../models'

export const setUsers = createAction<IUser[]>('users.setReady')
