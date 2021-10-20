import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'


// store-feature 
import { user } from './store-features/user'
import { challenge } from './store-features/challenge'


const reducers = combineReducers({
  user: user.reducer,
  challenge: challenge.reducer
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