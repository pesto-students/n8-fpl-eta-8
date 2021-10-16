import { configureStore } from '@reduxjs/toolkit'
import { user } from './store-features/user'


export default configureStore({
  reducer: {
    user: user.reducer
  },
})