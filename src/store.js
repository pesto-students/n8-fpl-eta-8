import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'


// store-feature 
import { leaderboardView } from './store-features/leaderboardView'
import { user } from './store-features/user'

const reducers = combineReducers({
  user: user.reducer,
  leaderboardView: leaderboardView.reducer
});

const persistConfig = {
  key:'root',
  storage
}

const persistedReducers = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducers,
  devTools:process.env.NODE_ENV !== 'production'
})