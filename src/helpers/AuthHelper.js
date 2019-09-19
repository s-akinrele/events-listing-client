import jwt from 'jwt-decode'

export const token = () => localStorage.getItem('authToken');

export const isLoggedIn = () => token() !== null

export const isEmpty = object => Object.entries(object).length === 0

export const decodeToken = token => jwt(token)

export const currentUser = user => {
  const authToken = token()
  const userIsEmpty = isEmpty(user)
  const decodedToken = decodeToken(authToken)

  return {
    id: !userIsEmpty ? user.id : decodedToken.user_id,
    firstName: !userIsEmpty ? user.first_name : decodedToken.first_name,
    lastName: !userIsEmpty ? user.last_name : decodedToken.last_name
  }
}
