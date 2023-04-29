import { IProduct } from "@/models/product.interface"
import { IServerResponse } from "@/models/serverResponse.interface"

export interface OrderDocument {
    orderExId: number | string
    Date: string
    field1: string
    field2: string
    field3: string
    field4: string
    field5: string
}

export interface OrdersResponse extends IServerResponse {
    data: OrderDocument[]
}

export interface OrderType {
    product: IProduct
    quantity: string | number
    total: string | number
}
export interface HistoryOrderResponse {
        data: [
            {
                product: IProduct
                quantity: string | number
                total: string | number
            }
        ]
}


export interface OrderItemsResponse extends IServerResponse {
    data: HistoryOrderResponse[]
}

export interface AddToCartOrderItemsResponse {
    data:  OrderType[]
}

export enum EnumDocumentsType {
    ORDERS = 'Orders',
    CARTESSET = 'Cartesset',

}