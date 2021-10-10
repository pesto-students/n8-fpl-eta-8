import { configureStore } from '@reduxjs/toolkit'
import userAuthReducer from './store-features/userAuth'

export default configureStore({
  reducer: {
      userAuth : userAuthReducer 
  },
})