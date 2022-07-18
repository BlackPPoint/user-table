import { IUser } from '../../models'

export interface IUsersTableProps {
  loading?: boolean
  users: IUser[]
  handleEditButtonClick: (userData: IUser) => void
  handleDeleteButtonClick: (userData: IUser) => void
}
