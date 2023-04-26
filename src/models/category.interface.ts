import { IData } from "./user.interface"

export interface ICategory {
    id: number
    name: string
    level: number,
    image: string
    parent?: ICategory[]
    children?: ICategory[]
    createdAt: IDate
    updatedAt: IDate
}

interface IDate {
    date: string
    timezone: string,
    timezone_type: number
}

export interface ICategoryResponse extends IData {
    data: ICategory[]
}