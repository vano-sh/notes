import { useAppSelector } from './hook'
import {
  addNote,
  changeNote,
  removeNote,
  showNote,
  findNoteOn,
  findNoteOff,
} from '../reducers/notesReducer'

export const useNotes = () => {
  const { mode, notes, outputFound } = useAppSelector(
    (state) => state.noteReducer
  )

  return {
    mode,
    notes,
    outputFound,
    addNote,
    changeNote,
    removeNote,
    showNote,
    findNoteOn,
    findNoteOff,
  }
}
