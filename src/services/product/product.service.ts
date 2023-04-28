import { instance } from "@/api/api.interceptor";
import {PRODUCTS, TypeProductData, TypeProductDataFilters} from './product.types'
import { IProduct } from "@/models/product.interface";
import { IProductResponse, IProductSearchResponse, IProductRespones } from "@/models/product.interface";
const API = 'https://digitrade.store/my_test/src/index.php';
const Controller = 'ProductsController'

export const ProductService =  {

    async getByCategory(lvl1:number | string | undefined, lvl2:number | string | undefined , lvl3:number | string | undefined, page :number | string | undefined , pageSize:number | string | undefined ){
        const response = await instance<IProductRespones>({
            url:`${API}`,
            method: 'POST',
            data: {
                classPoint: Controller,
                funcName: 'FetchProducts',
                val: {
                    lvl1: lvl1 == 0 ? null : lvl1,
                    lvl2: lvl2 == 0 ? null : lvl2,
                    lvl3: lvl3 == 0 ? null : lvl3,
                    pageSize: pageSize,
                    page: page
                }
            }
        })
        return response.data.data
    },
    
    async getSimilar(productId: string | number){
        const response = await instance<IProductSearchResponse>({
            url:`${API}`,
            method: 'POST',
            data: {
                classPoint: Controller,
                funcName: 'FetchProductsByFilter',
                val: {
                    filterValue: productId
                }
            }
        })

        return response.data.data
    },

    // async getBySlug(slug: string){
    //     return instance<IProduct>({
    //         url:`${PRODUCTS}/by-slug/${slug}`,
    //         method: 'GET'        
    //     })
    // },

    // async getByCategory(categorySlug: string){
    //     return instance<IProduct>({
    //         url:`${PRODUCTS}/by-category/${categorySlug}`,
    //         method: 'GET'        
    //     })
    // },

    // async getById(id: string | number){
    //     return instance<IProduct>({
    //         url:`${PRODUCTS}/${id}`,
    //         method: 'GET'        
    //     })
    // },

    // async create(){
    //     return instance<IProduct>({
    //         url: PRODUCTS,
    //         method: 'POST'
    //     })
    // },
    // async update(id: string | number, name: TypeProductData){
    //     return instance<IProduct>({
    //         url: `${PRODUCTS}/${id}`,
    //         method: 'PUT', 
    //         data: {name}
    //     })
    // },
    // async delete(id: string | number){
    //     return instance<IProduct>({
    //         url: `${PRODUCTS}/${id}`,
    //         method: 'DELETE'
    //     })
    // }

}