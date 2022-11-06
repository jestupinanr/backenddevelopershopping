export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}

export interface Person {
  id: string
  nit: string
  name: string
  address: string
  cityId: number
  email: string
  phoneNumber: string
}

export type NewPerson = Omit<Person, 'id'>
