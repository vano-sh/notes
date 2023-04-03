import { useAppSelector } from './hook'
import { addTag, removeTag } from '../reducers/tagsReducer'

export const useTags = () => {
  const { tags } = useAppSelector((state) => state.tagsReducer)

  return { tags, addTag, removeTag }
}
