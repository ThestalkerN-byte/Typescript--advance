//Opciones prestabelcidas y son estaticas.

export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}
export type User = {
  userName: string
  role: ROLES
}
const gerUser: User = {
  userName: 'german',
  role: ROLES.ADMIN
}

enum SIZES {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'm',
  XL = 'l'
}
