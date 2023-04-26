import { IAddressUser } from "./addressUser.interface"
import { IOrder } from "./favorites.interface"
import { IProduct } from "./product.interface"

export interface IUser {
    id: number
    userExId: string
    email: string
    password: string
    name: string
    phone: string
    registration: boolean
    recovery: string
    address: IAddressUser
    blocked: boolean
    obligo: number
    creditLimit: number
    createdAt: Date
    updatedAt: Date
}

export interface IFullUser extends IUser {
    favorites: IProduct[]
    orders: IOrder[]
}

export interface IUserState {
    email: string
}
export interface ITokens {
    accessToken: string
    refreshToken: string
}

export interface IInitialState {
    user: IUser | null
    isLoading: boolean
}
export interface IEmailPassword {
    email: string
    password: string
}

export interface IData {
    message: string
    status: string
}

export interface AuthRes extends ITokens{
    user: IUser
}
export interface IAuthResponse extends IData {
    // data: []
    data: AuthRes
}
