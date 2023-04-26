import { IOrder } from "./order.interface"
import { IProduct } from "./product.interface"

export interface IOrderItem {
    id: number
    order: IOrder
    product: IProduct
    price: number
    quantity: number
    total: number
    createdAt: Date
    updatedAt: Date
}
