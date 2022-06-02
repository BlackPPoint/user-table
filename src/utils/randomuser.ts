import { IUser, IRandomuserResult } from '../models'

import defaultUsers from '../data/randomuser.json'

export const randomuser = async (count?: number): Promise<IUser[]> => {
  try
  {
    const response = await fetch(`https://randomuser.me/api/?results=${Number.isInteger(count) ? count : 10}&noinfo`)
    const { results } = await response.json() as IRandomuserResult

    return results
  }
  catch
  {
    return defaultUsers as IUser[]
  }
}
