import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { INote } from '../types/INote'

type INotes = {
  notes: INote[]
}

const initialState: INotes = {
  notes: [],
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, { payload }: PayloadAction<{title: string, text: string}>) {
      state.notes.push({
        id: new Date().toISOString(),
        title: payload.title,
        text: payload.text,
      })
    },
  },
})

export const { addNote } = notesSlice.actions

export const { reducer: noteReducer } = notesSlice
