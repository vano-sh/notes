import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { noteReducer } from 'shared/model/reducers/notesReducer'
import { modalNoteReducer } from 'shared/model/reducers/modalNoteReducer'

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
