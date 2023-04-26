import axios from "axios";
import Cookies from "js-cookie";
import { getContentType } from "@/api/api.heler";
import { instance } from "@/api/api.interceptor";
import { ICategoryResponse } from "@/models/category.interface";
const CATEGORIES = 'CategoriesController'
const API = 'https://digitrade.store/my_test/src/index.php'
export const CategoryService =  {
    async getAll(){
        const response = await instance<ICategoryResponse>({
            url:`${API}`,
            method: 'POST',
            data: {
                classPoint: CATEGORIES,
                funcName: 'FetchAllCategories',
            }
        })

        return response.data.data
    },
    
    // async getById(id: string | number){
    //     return instance<ICategory>({
    //         url: `${CATEGORIES}/${id}`,
    //         method: 'GET'
    //     })
    // },

    // async getBySlug(slug: string | number){
    //     return instance<ICategory>({
    //         url: `${CATEGORIES}/by-slug/${slug}`,
    //         method: 'GET'
    //     })
    // },

    // async create(){
    //     return instance<ICategory>({
    //         url: CATEGORIES,
    //         method: 'POST'
    //     })
    // },

    // async update(id: string | number, name: string){
    //     return instance<ICategory>({
    //         url: `${CATEGORIES}/${id}`,
    //         method: 'PUT', 
    //         data: {name}
    //     })
    // },

    // async delete(id: string | number){
    //     return instance<ICategory>({
    //         url: `${CATEGORIES}/${id}`,
    //         method: 'DELETE'
    //     })
    // }

}