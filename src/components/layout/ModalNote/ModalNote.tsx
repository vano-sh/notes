import { useModalNote } from 'shared/model/hooks'
import { ModalBtn, ModalWindow } from './components'

export const ModalNote: React.FC = () => {
  const { isActive } = useModalNote()

  return (
    <div className='modal-note'>
      <ModalBtn />
      {isActive && (
        <div className='modal-note__window'>
          <ModalWindow />
        </div>
      )}
    </div>
  )
}
