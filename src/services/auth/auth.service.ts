import axios from "axios";
import Cookies from "js-cookie";
import { getContentType } from "@/api/api.heler";
import { IAuthResponse, IEmailPassword } from "@/models/user.interface";
import { saveToStorage } from "./auth.helper";
import { instance } from "@/api/api.interceptor";

export const AuthService =  {

    async main(type: 'login' | 'register', data:IEmailPassword) {
        const valAjax = {
            classPoint:"AuthController",
            funcName: "SignIn",
            val: data
        }
        const response = await instance<IAuthResponse>({
            url: `https://digitrade.store/my_test/src/index.php`,
            method:'POST',
            data : valAjax
        })
        console.log('response',response)
        if (response.data.data) saveToStorage(response.data)

        return response.data
    },

    async getNewTokens()
    {
        const refreshToken = Cookies.get('refreshToken')
        console.log('refreshToken',refreshToken)
        const valAjax = {
            classPoint:"AuthController",
            funcName: "AccessToken",
            val : {
                refreshToken: refreshToken
            }
        }
        const response = await axios.post<string, {data: IAuthResponse }>(
            'https://digitrade.store/my_test/src/index.php',
            valAjax ,
            {
                headers: getContentType()
            }
        )
        if(response.data.data.accessToken) saveToStorage(response.data)

        return response
    }
}