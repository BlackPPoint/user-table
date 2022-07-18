import { createReducer } from '@reduxjs/toolkit'

import { IUsersState } from './types'

import { generate, createUser, updateUser, deleteUser } from './thunks'

const initialState: IUsersState = {
  fetching: false,
  users: [],
  errorMessage: ''
}

export const usersReducer = createReducer(initialState, builder =>
  builder
    .addCase(generate.pending, (state) => ({ ...state, fetching: true }))
    .addCase(generate.fulfilled, (state, { payload }) => ({ ...state, fetching: false, users: [ ...payload ] }))
    .addCase(generate.rejected, (state, { payload }) => ({ ...state, fetching: false, users: [], errorMessage: payload.toString() }))
    .addCase(createUser.pending, (state, { payload }) => ({ ...state, fetching: true }))
    .addCase(createUser.fulfilled, (state, { payload }) => ({ ...state, fetching: false, users: state.users.concat(payload) }))
    .addCase(createUser.rejected, (state, { payload }) => ({ ...state, fetching: false, errorMessage: payload.toString() }))
    .addCase(updateUser.pending, (state, { payload }) => ({ ...state, fetching: true }))
    .addCase(updateUser.fulfilled, (state, { payload }) => ({ ...state, fetching: false, users: state.users.map(user => user.login.uuid !== payload.login.uuid ? user : payload) }))
    .addCase(updateUser.rejected, (state, { payload }) => ({ ...state, fetching: false, errorMessage: payload.toString() }))
    .addCase(deleteUser.pending, (state, { payload }) => ({ ...state, fetching: true }))
    .addCase(deleteUser.fulfilled, (state, { payload }) => ({ ...state, fetching: false, users: state.users.filter(user => user.login.uuid !== payload) }))
    .addCase(deleteUser.rejected, (state, { payload }) => ({ ...state, fetching: false, errorMessage: payload.toString() })))