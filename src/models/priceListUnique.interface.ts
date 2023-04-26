import { IProduct } from "./product.interface"

export interface IOrder {
    id: number
    product: IProduct
    price: number
    discount: number
    priceList: number
    createdAt: Date
    updatedAt: Date
}
