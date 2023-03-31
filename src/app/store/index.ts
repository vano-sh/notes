import { configureStore, combineReducers } from '@reduxjs/toolkit'

const rootReducers = combineReducers({})

const store = configureStore({
  reducer: rootReducers,
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
