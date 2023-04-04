import { INote } from 'shared/model/types/INote'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type INotes = {
  mode: { id: 'all' | 'search'; tagFind: string }
  notes: INote[]
  outputFound: INote[]
}

const localStore = localStorage.getItem('notes')
const notesLocal = localStore ? JSON.parse(localStore) : []

const initialState: INotes = {
  mode: { id: 'all', tagFind: '' },
  notes: notesLocal,
  outputFound: [],
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
        tags: payload.tags,
      })

      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
    changeNote(state, { payload }: PayloadAction<INote>) {
      const note = state.notes.find((note) => note.id === payload.id)
      if (note) {
        note.title = payload.title
        note.text = payload.text
        note.tags = payload.tags
      }

      localStorage.setItem('notes', JSON.stringify(state.notes))
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
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
    findNoteOn(state, { payload }: PayloadAction<string>) {
      state.mode.id = 'search'
      state.mode.tagFind = payload
      state.outputFound = state.notes.filter((note) =>
        note.tags?.includes(payload)
      )
    },
    findNoteOff(state) {
      state.mode.id = 'all'
      state.outputFound = []
    },
  },
})

export const {
  addNote,
  changeNote,
  removeNote,
  showNote,
  findNoteOn,
  findNoteOff,
} = notesSlice.actions

export const { reducer: noteReducer } = notesSlice
