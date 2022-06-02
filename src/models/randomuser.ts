export interface IRandomuserResult {
  results: IUser[]
}

export interface IUser {
  id: INamedValue
  login: ILoginInfo
  picture: IUserPicture

  name: IUserName,
  gender: 'male' | 'female'
  nat: 'AU' | 'BR' | 'CA' | 'CH' | 'DE' | 'DK' | 'ES' | 'FI' | 'FR' | 'GB' | 'IE' | 'IR' | 'NO' | 'NL' | 'NZ' | 'TR' | 'US'
  dob: IDateRange
  registered: IDateRange

  email: string
  phone: string
  cell: string
  location: ILocation
}

interface IDateRange {
  age: number
  date: string
}

interface INamedValue {
  name: string
  value: string
}

interface ILocation {
  country: string
  state: string
  city: string
  street: { name: string, number: number }
  postcode: number

  coordinates: { latitude: string, longitude: string }
  timezone: { description: string, offset: string }
}

interface ILoginInfo {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

interface IUserName {
  title: string
  first: string
  last: string
}

interface IUserPicture {
  thumbnail: string
  medium: string
  large: string
}
