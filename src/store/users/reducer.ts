import { createReducer } from '@reduxjs/toolkit'

import { IUsersState } from './types'

import { addUser, generate } from './thunks'

const initialState: IUsersState = {
  fetching: false,
  users: []
}

export const usersReducer = createReducer(initialState, builder =>
  builder
    .addCase(generate.pending, (state) => ({ ...state, fetching: true }))
    .addCase(generate.fulfilled, (state, { payload }) => ({ ...state, fetching: false, users: [ ...payload ] }))
    .addCase(generate.rejected, (state) => ({ ...state, fetching: false, users: [] }))
    .addCase(addUser.pending, (state) => ({ ...state, fetching: true }))
    .addCase(addUser.fulfilled, (state, { payload }) => ({ ...state, fetching: false, users: [ payload, ...state.users ] }))
    .addCase(addUser.rejected, (state) => ({ ...state, fetching: false, users: [] }))
  )
