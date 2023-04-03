import { IModal } from './../types/IModal'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IModal = {
  isActive: false,
  idNote: '',
  mode: '',
}

const modalNoteSlice = createSlice({
  name: 'modalNote',
  initialState,
  reducers: {
    toggleModal(state, { payload }: PayloadAction<IModal>) {
      state.isActive = payload.isActive
      state.mode = payload.mode
      state.idNote = payload.idNote
    },
  },
})

export const { toggleModal } = modalNoteSlice.actions
export const { reducer: modalNoteReducer } = modalNoteSlice
