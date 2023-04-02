import { useAppDispatch } from 'shared/model/hooks/hook'
import { useModalNote } from 'shared/model/hooks/useModalNote'

export const AddBtn: React.FC = () => {
  const { toggleModal } = useModalNote()
  const dispatch = useAppDispatch()

  const handleBtnClick = () => {
    dispatch(toggleModal(true))
  }

  return (
    <div className='add-btn' onClick={handleBtnClick}>
      +
    </div>
  )
}
