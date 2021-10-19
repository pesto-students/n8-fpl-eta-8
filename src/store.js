import { configureStore } from '@reduxjs/toolkit'
import { challenge } from './store-features/challenge'
import { user } from './store-features/user'


export default configureStore({
  reducer: {
    user: user.reducer,
    challenge:challenge.reducer
  },
})