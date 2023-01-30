export const createProduct = (
  id: string | number,
  stock: number = 10,
  isNew: boolean = true
) => {
  return {
    id,
    stock,
    isNew
  }
}
