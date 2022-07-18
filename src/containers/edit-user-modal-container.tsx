import React from 'react';

import { useAppDispatch, useAppSelector } from '../store';
import { updateUser } from '../store/users/thunks';
import { IUsersEditModalContainerProps, IUsersEditUserModalFormValuesType } from '../components/edit-user-modal/types';

import { EditUserModal } from '../components/edit-user-modal';
import moment from 'moment';

export const EditUserModalContainer = ({ editableUser, handleCloseModal }: IUsersEditModalContainerProps) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(s => s.users.users).find(foundUser => foundUser.login.uuid === editableUser.login.uuid)
  const saving = useAppSelector(s => s.users.fetching)

  const handleSaveUserClick = (values: IUsersEditUserModalFormValuesType) => {
    const formattedData = {
      name: {
        first: values.firstName,
        last: values.lastName,
        title: values.nameTitle
      },
      email: values.email,
      phone: values.phone,
      cell: values.cell,
      dob: {
        date: moment(values.birthday).format(),
        age: moment().diff(values.birthday, 'years')
      }
    }
    const updatedUser = { ...editableUser, ...formattedData }
    dispatch(updateUser(updatedUser)).then(() => {
      handleCloseModal()
    })
  }
  return <EditUserModal submit={handleSaveUserClick} user={user} saving={saving} handleCloseModal={handleCloseModal} />
}