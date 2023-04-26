import * as userActions from './user/user.actions'
import { cartSlice } from './cart/cart.slice'
import { darkModeSlice } from './darkMode/darkMode.slice'

export const rootActions = {
    ...userActions,
    ...cartSlice.actions,
    ...darkModeSlice.actions
    
}