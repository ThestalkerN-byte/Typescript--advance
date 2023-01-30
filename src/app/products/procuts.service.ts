import { faker } from '@faker-js/faker'
import {
  CreateProductDto,
  FindProductDto,
  UpdatProductDto
} from './product.dto'
import { Product } from './product.model'

export const products: Product[] = []

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  }
  products.push(newProduct)
  return newProduct
}


export const updateProduct = (
  id: string,
  changes: UpdatProductDto
): Product => {
  const index = products.findIndex(item => item.id === id)
  const prevData = products[index]
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index]
}


export const getProducts = (dto: FindProductDto): Product[] => {
  return products
}

        //Aca lo que estoy haciendo es obtener el tipado que va a tener la id, entonce al yo cambiarle el tiapdo por algun motivo
         // esto se va actualizar al instante, asi me evita de error de tipo
export const deleteProducts = (id: Product['id']) => {}

const getProduct = (id: string) => {}
