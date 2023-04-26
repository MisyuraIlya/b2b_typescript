import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { FLUSH,PAUSE,PERSIST, persistReducer, persistStore,PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { postAPI } from '@/services/PostServiceOld'
import { productAPI } from "@/services/ProductServiceOld";
import { cartSlice } from "./cart/cart.slice";
import { userSlice } from "./user/user.slice";
import { darkModeSlice } from "./darkMode/darkMode.slice";
const rootReducer = combineReducers({
  // [postAPI.reducerPath]: postAPI.reducer,
  // [productAPI.reducerPath]: productAPI.reducer,
  cart: cartSlice.reducer,
  user: userSlice.reducer,
  darkMode: darkModeSlice.reducer
})

const persistConfig = {
  key: 'b2b',
  storage,
  whitelist:['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const setupStore = () => {
//   const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
//       postAPI.middleware,
//       productAPI.middleware
//     ])
//   })

//   const persistor = persistStore(store)

//   return { store, persistor }
// }

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
// export type RootState = ReturnType<typeof rootReducer>
// export type AppStore = ReturnType<typeof setupStore>
// export type AppDispatch = ReturnType<typeof setupStore>['store']['dispatch']

