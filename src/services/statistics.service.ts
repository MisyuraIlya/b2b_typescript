import axios from "axios";
import Cookies from "js-cookie";
import { getContentType } from "@/api/api.heler";
import { instance } from "@/api/api.interceptor";
import { IUser } from "@/models/user.interface";

const STATISTICS = 'statistics'

export type TypeStatisticsRespose = {
    name: string
    value: number
}[]
export const StatisticsService =  {
    async getMain(){
        return instance<TypeStatisticsRespose>({
            url: `${STATISTICS}/main`,
            method: 'GET'
        })
    },
    
}