import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  isActive: false,
}

const modalNoteSlice = createSlice({
  name: 'modalNote',
  initialState,
  reducers: {
    toggleModal(state, { payload }: PayloadAction<boolean>) {
      state.isActive = payload
    },
  },
})

export const { toggleModal } = modalNoteSlice.actions
export const { reducer: modalNoteReducer } = modalNoteSlice
