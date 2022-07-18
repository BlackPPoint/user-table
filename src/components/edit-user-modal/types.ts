import { IUser } from '../../models';
import { Moment } from 'moment'

export interface IUsersEditModalProps {
  saving?: boolean
  user: IUser
  submit: (fieldValues: IUsersEditUserModalFormValuesType) => void
  handleCloseModal: () => void
}

export interface IUsersEditModalContainerProps {
  editableUser: IUser
  handleCloseModal: () => void
}

export type IUsersEditUserModalFormValuesType = {
  firstName: string,
  lastName: string,
  nameTitle: string,
  email: string,
  phone: string,
  cell: string,
  birthday: Moment
}