import axios from "axios";
import Cookies from "js-cookie";
import { getContentType } from "@/api/api.heler";
import { instance } from "@/api/api.interceptor";
import { IUser } from "@/models/user.interface";
import { IPayment } from "@/models/paymentInfo.interface";
const PAYMENT = 'payment'

export const PaymentService =  {
    async createPayment(amount: number) {
        return instance.post<IPayment>(PAYMENT, {
            amount
            })
    }
}