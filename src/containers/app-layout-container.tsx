import React from 'react'

import { AppLayout, IAppAction } from '../components/app-layout'
import { UsersTableContainer } from './users-table-container'

import { createUser, generate } from '../store/users/thunks'
import { useAppDispatch } from '../store'

export const AppLayoutContainer = () => {
  const dispatch = useAppDispatch()

  const actions: IAppAction[] = [
    { key: 'generate', title: 'Сгенерировать еще раз', action: () => dispatch(generate(20)) },
    { key: 'createUser', title: 'Сгенерировать одного пользователя', action: () => dispatch(createUser(1)) }
  ]

  return <AppLayout actions={actions}>
    <UsersTableContainer />
  </AppLayout>
}
