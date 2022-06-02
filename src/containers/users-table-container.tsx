import React from 'react'

import { UsersTable } from '../components/users-table'

import { useAppSelector } from '../store'

export const UsersTableContainer = () => {
  const users = useAppSelector(s => s.users.users)
  const fetching = useAppSelector(s => s.users.fetching)

  return <UsersTable loading={fetching} users={users} />
}
