import { useAppDispatch, useModalNote } from 'shared/model/hooks'

export const ModalBtn: React.FC = () => {
  const { toggleModal } = useModalNote()
  const dispatch = useAppDispatch()

  const handleBtnClick = () => {
    dispatch(toggleModal({ isActive: true, idNote: '', mode: '' }))
  }

  return (
    <div className='modal-note__btn' onClick={handleBtnClick}>
      +
    </div>
  )
}
