export const createProduct = (
  id: string | number,
  stock?: number,
  isNew?: boolean
) => {
  return {
    id,
    stock: stock ?? 0,
    isNew: isNew ?? true //estos operadores solo van a evaluar si la prop viene null o undefined
  }
}
createProduct(1)

createProduct(1, 0, false) // si mi return usara un OR este me devolveria los valores por defecto a pesar de que no los quiero
// eso se soluciona con un nullish-coalescing que solo estableceria el valor por defencto en caso de que sae null
// o undefined
