import { useAppSelector } from './hook'
import {
  addNote,
  changeNote,
  removeNote,
  showNote,
  findNote,
  fetchNotes,
} from '../reducers/notesReducer'

export const useNotes = () => {
  const { notes } = useAppSelector((state) => state.noteReducer)

  return {
    notes,
    addNote,
    changeNote,
    removeNote,
    showNote,
    findNote,
    fetchNotes,
  }
}
