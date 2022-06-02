import { IUser } from 'models'

export interface IUsersState {
  fetching: boolean
  users: IUser[]
}
