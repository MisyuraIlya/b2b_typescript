import { IProduct } from "./product.interface"

export interface IPriceListBase {
    id: number
    price: number
    discount: number
    createdAt: Date
    updatedAt: Date
}
