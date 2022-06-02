import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { createStore } from './create-store'

// состояние приложения
export const store = createStore()

// тип состояния и диспатчера Redux
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// хуки
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
