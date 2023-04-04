import { useAppDispatch, useModalNote } from 'shared/model/hooks'
import { ModalBtn, ModalWindow } from './components'

export const ModalNote: React.FC = () => {
  const { isActive, toggleModal } = useModalNote()
  const dispatch = useAppDispatch()

  const handleCloseClick = () => {
    dispatch(toggleModal({ isActive: false, idNote: '', mode: '' }))
  }

  return (
    <div
      className={isActive ? 'modal-note active' : 'modal-note'}
      onClick={handleCloseClick}
    >
      <div onClick={(event) => event.stopPropagation()}>
        <ModalBtn />
        {isActive && (
          <div className='modal-note__window'>
            <ModalWindow />
          </div>
        )}
      </div>
    </div>
  )
}
