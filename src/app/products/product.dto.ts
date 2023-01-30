import { Product } from './product.model'

export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string
}

/*
  El omit me sirve para evitar pasar parametros que son asignados en un back
  entonces a la hora de usar una funcion que lo cree, me evito pasar esos campos
  ya que son autogenerados
  */
type example = Pick<Product, 'color' | 'category'>
/*
 En cambio el pick es todo lo contrario, me sirve para quedarme con ciertos
 valores especificos que alguna instancia creada
 */

// Lo quue hace este utility type es poner todas las propiedades de product como opcionales
export interface UpdatProductDto extends Partial<CreateProductDto> {}
//Ademas exisque el REQUIRE  que es lo contrario al partial.
type example2 = Required<Product>

//Estoy diciendo que todos los datos que voy a mandar de busuqeda son solo de lectura, y ademas voy a mandar solo los qeu
// necesite usars
export interface FindProductDto
  extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>
}
