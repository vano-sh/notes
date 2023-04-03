import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ITag } from '../types/ITag'

type ITags = {
  tags: ITag[]
}

const initialState: ITags = {
  tags: [],
}

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addTag: (state, { payload }) => {
      state.tags.push({
        tag: payload.tag,
        idNote: payload.idNote,
      })
    },
    removeTag: (state, { payload }: PayloadAction<ITag>) => {
      state.tags = state.tags.filter((tag) => tag !== payload)
    },
  },
})

export const { addTag, removeTag } = tagsSlice.actions
export const { reducer: tagsReducer } = tagsSlice
