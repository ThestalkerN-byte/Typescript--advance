import { addProduct, getProducts, products } from './products/procuts.service'
import { faker } from '@faker-js/faker'
for (let i = 0; i < 50; i++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    size: faker.helpers.arrayElement(['S', 'M', 'L']),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid()
  })
}
console.log(products)
getProducts(({
  tags:['123']
}))
