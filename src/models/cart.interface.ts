import { IProduct } from "@models/product.interface"

export interface ICart {
    id: string | number
    product: IProduct
    quantity: number

}