import {ICart} from '@models/cart.interface'

export interface ICartInititalState {
    items: ICart[]
}

export interface IAddToCartPayload extends Omit<ICart, 'id'> {}

export interface IChangeQuantityPayload extends Pick<ICart, 'id'> {
    type: 'minus' | 'plus'
}

