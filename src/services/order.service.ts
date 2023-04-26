import axios from "axios";
import Cookies from "js-cookie";
import { getContentType } from "@/api/api.heler";
import { instance } from "@/api/api.interceptor";
import { IUser } from "@/models/user.interface";
import { IOrder } from "@/models/favorites.interface";
const ORDERS = 'orders'

export const UserService =  {
    async getOrder(){
        return instance<IOrder[]>({
            url: ORDERS,
            method: 'GET'
        })
    },

    // async getProfile(){
    //     return instance<IOrder[]>({
    //         url: ORDERS,
    //         method: 'GET'
    //     })
    // },

}