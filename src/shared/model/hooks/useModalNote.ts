import { useAppSelector } from './hook'
import { toggleModal } from '../reducers/modalNoteReducer'

export const useModalNote = () => {
  const { isActive, mode, idNote } = useAppSelector(
    (state) => state.modalNoteReducer
  )

  return { isActive, mode, idNote, toggleModal }
}
