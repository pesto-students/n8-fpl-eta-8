import { configureStore } from '@reduxjs/toolkit'
import { leaderboardView } from './store-features/leaderboardView'
import { user } from './store-features/user'


export default configureStore({
  reducer: {
    user: user.reducer,
    leaderboardView:leaderboardView.reducer
  },
})