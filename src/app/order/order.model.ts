import { BaseModel } from "../base.model";
import { Product } from "../products/product.model";
import { User } from "../users/users.model";

interface Order extends BaseModel{
  products:Product[]
  user:User
}
