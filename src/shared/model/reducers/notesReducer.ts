import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { INote } from '../types/INote'

const fetchNotes = createAsyncThunk('notes/fetchNotes', () => {
  const notes = Promise.resolve().then(() => localStorage.getItem('notes'))
  console.log(notes)
  return notes
})

type INotes = { notes: INote[] }

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
        tags: payload.tags,
      })

      localStorage.setItem(
        'notes',
        JSON.stringify(state.notes.map((note) => note))
      )
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
    findNote(state, { payload }: PayloadAction<string>) {
      state.notes = state.notes.filter((note) =>
        note.tags?.filter((tag) => tag === payload)
      )
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotes.fulfilled, (state, { payload }) => {
      console.log(payload)
    })
  },
})

export const { addNote, changeNote, removeNote, showNote, findNote } =
  notesSlice.actions

export { fetchNotes }

export const { reducer: noteReducer } = notesSlice
