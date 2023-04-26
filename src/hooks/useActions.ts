import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { useMemo } from "react";
// import { cartActions } from "../store/cart/cart.slice";
import { rootActions } from "@/store/root-actions";
// const allActions = {
//     ...cartActions,
//     ...u
// }


// export const useActions = () => {
//     const dispatch = useDispatch()
//     return bindActionCreators(allActions, dispatch)
// }

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}