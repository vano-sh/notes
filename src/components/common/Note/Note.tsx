import { useAppDispatch, useNotes, useModalNote } from 'shared/model/hooks'
import { INote } from 'shared/model/types/INote'

export const Note: React.FC<INote> = ({ id, title, text }) => {
  const { removeNote } = useNotes()
  const { toggleModal } = useModalNote()

  const dispatch = useAppDispatch()

  const handleShowClick = (id: string) => {
    dispatch(toggleModal({ isActive: true, mode: 'show', idNote: id }))
  }
  const handleChangeClick = (id: string) => {
    dispatch(toggleModal({ isActive: true, mode: 'change', idNote: id }))
  }
  const handleDelClick = (id: string) => {
    dispatch(removeNote(id))
  }

  return (
    <div className='note'>
      <div className='note__header'>
        <button onClick={() => handleChangeClick(id)}>I</button>
        <button onClick={() => handleDelClick(id)}>X</button>
      </div>
      <div className='note__body' onClick={() => handleShowClick(id)}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className='note__footer'>tags</div>
    </div>
  )
}
