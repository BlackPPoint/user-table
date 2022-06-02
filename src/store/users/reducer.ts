import { createReducer } from '@reduxjs/toolkit'

import { IUsersState } from './types'

import { generate } from './thunks'

const initialState: IUsersState = {
  fetching: false,
  users: []
}

export const usersReducer = createReducer(initialState, builder =>
  builder
    .addCase(generate.pending, (state) => ({ ...state, fetching: true }))
    .addCase(generate.fulfilled, (state, { payload }) => ({ ...state, fetching: false, users: [ ...payload ] }))
    .addCase(generate.rejected, (state, { payload }) => ({ ...state, fetching: false, users: [] })))
