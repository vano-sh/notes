import { useAppSelector } from './hook'
import { addNote, changeNote, removeNote } from '../reducers/notesReducer'

export const useNotes = () => {
  const { notes } = useAppSelector((state) => state.noteReducer)

  return { notes, addNote, changeNote, removeNote }
}
