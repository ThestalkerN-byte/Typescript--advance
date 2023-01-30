import { ROLES, User } from './01-enums'

const currentUser: User = {
  userName: 'asd',
  role: ROLES.ADMIN
}

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) return true
  else return false
}

export const checkRole = (...roles: string[]) => {
  // Esto lo que hace es encapsular todos los argumentos en un array automaticamente
  if (roles.includes(currentUser.role)) {
    return true
  } else {
    return false
  }
}

const rta = checkRole(ROLES.ADMIN, ROLES.CUSTOMER, ROLES.SELLER)
