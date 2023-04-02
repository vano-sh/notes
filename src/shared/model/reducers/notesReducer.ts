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
    addNote(
      state,
      { payload }: PayloadAction<{ title: string; text: string }>
    ) {
      state.notes.push({
        id: new Date().toISOString(),
        title: payload.title,
        text: payload.text,
      })
    },
    changeNote(
      state,
      { payload }: PayloadAction<{ id: string; title: string; text: string }>
    ) {
      const note = state.notes.find((note) => note.id === payload.id)
      if (note) {
        note.title = payload.title
        note.text = payload.text
      }
    },
    removeNote(state, { payload }: PayloadAction<string>) {
      state.notes = state.notes.filter((note) => note.id !== payload)
    },
  },
})

export const { addNote, changeNote, removeNote } = notesSlice.actions

export const { reducer: noteReducer } = notesSlice
