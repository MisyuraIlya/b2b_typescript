import axios from "axios";
import Cookies from "js-cookie";
import { getContentType } from "@/api/api.heler";
import { instance } from "@/api/api.interceptor";
import { IFullUser, IUser } from "@/models/user.interface";
const USERS = 'users'

type TypeData = {
    email: string
    password?: string
    name?: string
    image?: string
    phone?: string
}

export const UserService =  {
    async getProfile(){
        return instance<IFullUser>({
            url: `${USERS}/profile`,
            method: 'GET'
        })
    },
    
    async updateProfile(data: TypeData){
        return instance<IUser>({
            url: `${USERS}/profile`,
            method: 'PUT', 
            data: {data}
        })
    },

    async toggleFavorite(productId: string | number){
        return instance<IUser>({
            url: `${USERS}/profile/favorites/${productId}`,
            method: 'PATCH'
        })
    }

}