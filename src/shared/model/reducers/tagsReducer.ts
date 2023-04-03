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
    addTag: (state, { payload }: PayloadAction<ITag>) => {
      state.tags.push({ id: payload.id, tag: payload.tag })
    },
    removeTag: (state, { payload }: PayloadAction<string>) => {
      state.tags = state.tags.filter((tag) => tag.id !== payload)
    },
  },
})

export const { addTag, removeTag } = tagsSlice.actions
export const { reducer: tagsReducer } = tagsSlice
