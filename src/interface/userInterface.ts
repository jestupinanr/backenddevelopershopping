export interface userComplete {
  id: string
  personId: string
  password: string
  dateCreated: string
}

export interface login {
  email: string
  password: string
}

export type NewUser = Omit<userComplete, 'id' | 'dateCreated'>
