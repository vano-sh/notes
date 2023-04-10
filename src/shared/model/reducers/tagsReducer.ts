import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ITag } from '../types/ITag'

type ITags = {
  tags: ITag[]
}

const localStore = localStorage.getItem('tags')
const tagsLocal = localStore ? JSON.parse(localStore) : []

const initialState: ITags = {
  tags: tagsLocal,
}

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addTag: (state, { payload }: PayloadAction<ITag>) => {
      if (!state.tags.some((tag) => tag.tag === payload.tag)) {
        state.tags.push(payload)
      }

      localStorage.setItem('tags', JSON.stringify(state.tags))
    },
    removeTag: (state, { payload }: PayloadAction<string>) => {
      state.tags = state.tags.filter((tag) => tag.id !== payload)

      localStorage.setItem('tags', JSON.stringify(state.tags))
    },
  },
})

export const { addTag, removeTag } = tagsSlice.actions
export const { reducer: tagsReducer } = tagsSlice
