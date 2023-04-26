import { IUser } from "./user.interface"

export interface IAddressUser {
    id: number
    user: IUser
    town: string
    street: string
    apartment: string
    floor: string
    entrance: string
    zip: number
    lat: string
    lng: string
    active: boolean
}
