import { useAppDispatch, useModalNote } from 'shared/model/hooks'

export const ModalBtn: React.FC = () => {
  const { isActive, toggleModal } = useModalNote()
  const dispatch = useAppDispatch()

  const handleBtnClick = () => {
    isActive
      ? dispatch(toggleModal({ isActive: false, idNote: '', mode: '' }))
      : dispatch(toggleModal({ isActive: true, idNote: '', mode: '' }))
  }

  return (
    <div className='modal-note__btn-open' onClick={handleBtnClick}>
      +
    </div>
  )
}
