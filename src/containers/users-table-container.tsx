import React, {useState} from 'react'

import { UsersTable } from '../components/users-table'

import { useAppDispatch, useAppSelector } from '../store'
import { IUser } from '../models'
import { deleteUser } from '../store/users/thunks'
import { EditUserModalContainer } from './edit-user-modal-container'

export const UsersTableContainer = () => {
  const users = useAppSelector(s => s.users.users)
  const fetching = useAppSelector(s => s.users.fetching)
  const dispatch = useAppDispatch()
  const [editableUser, setEditableUser] = useState({} as IUser)

  const handleEditButtonClick = (user: IUser) => {
    setEditableUser(user)
  }
  const handleDeleteButtonClick = (user: IUser) => {
    dispatch(deleteUser(user))
  }
  const handleCloseModal = () => {
    setEditableUser({} as IUser)
  }
  return (
    <>
      <UsersTable loading={fetching} users={users} handleEditButtonClick={handleEditButtonClick} handleDeleteButtonClick={handleDeleteButtonClick} />
      {
        editableUser.email && (
          <EditUserModalContainer editableUser={editableUser} handleCloseModal={handleCloseModal} />
        )
      }
    </>
  )
}
