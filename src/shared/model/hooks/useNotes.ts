import { useAppSelector } from './hook'
import { addNote } from '../reducers/notesReducer'

export const useNotes = () => {
  const { notes } = useAppSelector((state) => state.noteReducer)

  return { notes, addNote }
}
