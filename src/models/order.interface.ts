import { ICart } from './cart.interface';
import { IPayment } from './paymentInfo.interface';
import {IUser} from './user.interface';


export enum EnumOrderStatus {
    PENDING = 'PENDING',
    PAYED = 'PAYED',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED',
}
export interface IOrder {
    id: number
    userId: IUser
    items: ICart[]
    status: EnumOrderStatus
    comment: string
    deliveryDate: Date
    createdAt: Date
    updatedAt: Date
}
