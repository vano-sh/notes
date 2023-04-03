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
    addNote(state, { payload }: PayloadAction<INote>) {
      state.notes.push({
        id: payload.id,
        title: payload.title,
        text: payload.text,
      })
    },
    changeNote(state, { payload }: PayloadAction<INote>) {
      const note = state.notes.find((note) => note.id === payload.id)
      if (note) {
        note.title = payload.title
        note.text = payload.text
      }
    },
    showNote(state, { payload }: PayloadAction<INote>) {
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
