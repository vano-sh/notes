import { useAppSelector } from './hook'
import { toggleModal } from '../reducers/modalNoteReducer'

export const useModalNote = () => {
  const { isActive } = useAppSelector((state) => state.modalNoteReducer)

  return { isActive, toggleModal }
}
