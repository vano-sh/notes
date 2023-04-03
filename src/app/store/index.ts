import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  noteReducer,
  modalNoteReducer,
  tagsReducer,
} from 'shared/model/reducers'

const rootReducers = combineReducers({
  noteReducer,
  modalNoteReducer,
  tagsReducer,
})

const store = configureStore({
  reducer: rootReducers,
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
