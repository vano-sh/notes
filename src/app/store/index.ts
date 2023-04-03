import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { noteReducer, modalNoteReducer } from 'shared/model/reducers'

const rootReducers = combineReducers({
  noteReducer,
  modalNoteReducer,
})

const store = configureStore({
  reducer: rootReducers,
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
