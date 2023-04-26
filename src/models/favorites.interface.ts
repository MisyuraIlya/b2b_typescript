import { IProduct } from "./product.interface"
import { IUser } from "./user.interface"

export interface IOrder {
    id: number
    product: IProduct
    user: IUser
    toggeled: boolean
    createdAt: Date
    updatedAt: Date
}
