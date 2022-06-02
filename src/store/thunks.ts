import { createAsyncThunk } from '@reduxjs/toolkit'

import { generate } from './users/thunks'
import { setReady } from './application/actions'

export const initApplication = createAsyncThunk(
  'initApplication',
  async (_: void, { dispatch }) => {
    await dispatch(generate(20))
    dispatch(setReady())
  }
)
