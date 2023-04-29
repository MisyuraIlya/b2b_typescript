import { instance } from "@/api/api.interceptor";
import { OrderDocument, OrdersResponse, HistoryOrderResponse, OrderItemsResponse, AddToCartOrderItemsResponse } from "./documents.types";
import { IProduct } from "@/models/product.interface";
import { IProductResponse, IProductSearchResponse, IProductRespones } from "@/models/product.interface";
const API = 'https://digitrade.store/my_test/src/index.php';
const Controller = 'DocumentsController'

export const DocumentService =  {

    async FetchAllOrders(){
        const response = await instance<OrdersResponse>({
            url:`${API}`,
            method: 'POST',
            data: {
                classPoint: Controller,
                funcName: 'FetchAllOrders',
                val: {
                    id:''
                }
            }
        })
        return response.data.data
    },
    async FetchOrderItemsById(id: number | string | null){
        if(id) {
            const response = await instance<HistoryOrderResponse>({
                url:`${API}`,
                method: 'POST',
                data: {
                    classPoint: Controller,
                    funcName: 'FetchOrderItemsById',
                    val: {
                        id:id
                    }
                }
            })
            return response.data.data
        } else {
            return null
        }
    },
    async AddToCartOrderItems(id: number | string){
        const response = await instance<AddToCartOrderItemsResponse>({
            url:`${API}`,
            method: 'POST',
            data: {
                classPoint: Controller,
                funcName: 'AddToCartOrderItems',
                val: {
                    id:id
                }
            }
        })
        return response.data.data
    },
}