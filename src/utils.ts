import { NewPerson } from './interface/personInterface'
import { login, NewUser } from './interface/userInterface'

// const parseComment = (commentFromRequest: any): string => {
//   if (!isString(commentFromRequest)) {
//     throw new Error('Incorrect or missing comment')
//   }

//   return commentFromRequest
// }

// const parseDate = (dateFromRequest: any): string => {
//   if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
//     throw new Error('incorrect or missing date')
//   }

//   return dateFromRequest
// }

const parseString = (stringFromRequest: any): string => {
  if (!isString(stringFromRequest)) {
    throw new Error('incorrect or missing string')
  }

  return stringFromRequest
}

const parseNumber = (numberFromRequest: any): number => {
  if (!isNumber(numberFromRequest)) {
    throw new Error('incorrect or missing number')
  }

  return numberFromRequest
}

// const parseWeather = (weatherFromRequest: any): Weather => {
//   if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
//     throw new Error('Incorrect or missing Weather')
//   }

//   return weatherFromRequest
// }

// const parseVisibility = (visibilityFromRequest: any): Visibility => {
//   if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
//     throw new Error('Incorrect or missing visibility')
//   }

//   return visibilityFromRequest
// }

const isString = (string: string): boolean => {
  return typeof string === 'string'
}
const isNumber = (number: number): boolean => {
  return typeof number === 'number'
}

// const isDate = (date: string): boolean => {
//   return Boolean(Date.parse(date))
// }

// const isWeather = (param: any): boolean => {
//   return Object.values(Weather).includes(param)
// }

// const isVisibility = (param: any): boolean => {
//   return Object.values(Visibility).includes(param)
// }

const toNewPersonEntry = (object: any): NewPerson => {
  const newEntry: NewPerson = {
    name: parseString(object.name),
    address: parseString(object.address),
    cityId: parseNumber(object.cityId),
    email: parseString(object.email),
    nit: parseString(object.nit),
    phoneNumber: parseString(object.phoneNumber)
  }

  return newEntry
}

const toNewUserEntry = (object: any): NewUser => {
  const newEntry: NewUser = {
    password: parseString(object.password),
    personId: parseString(object.personId)
  }

  return newEntry
}

const toLoginEntry = (object: any): login => {
  const newEntry: login = {
    email: parseString(object.email),
    password: parseString(object.password)
  }

  return newEntry
}

export { toNewPersonEntry, toNewUserEntry, toLoginEntry }
