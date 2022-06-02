import { createReducer } from '@reduxjs/toolkit'

import { IApplicationState } from './types'

import { setReady } from './actions'

const initialState: IApplicationState = {
  ready: false
}

export const applicationReducer = createReducer(initialState, builder =>
  builder
    .addCase(setReady, (state) => ({ ...state, ready: true })))
