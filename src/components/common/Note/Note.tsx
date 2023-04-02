import { INote } from 'shared/model/types/INote'
import { useAppDispatch } from 'shared/model/hooks/hook'
import { useNotes } from 'shared/model/hooks/useNotes'
import { useModalNote } from 'shared/model/hooks/useModalNote'

export const Note: React.FC<INote> = ({ id, title, text }) => {
  const { changeNote, removeNote } = useNotes()
  const { toggleModal } = useModalNote()

  const dispatch = useAppDispatch()

  const handleChangeClick = ({ id, title, text }: INote) => {
    dispatch(toggleModal(true))
    console.log(id)
    console.log(title)
    console.log(text)
  }

  const handleDelClick = (id: string) => {
    dispatch(removeNote(id))
  }

  return (
    <div className='note'>
      <h2>{title}</h2>
      <p>{text}</p>
      <button onClick={() => handleChangeClick({ id, title, text })}>I</button>
      <button onClick={() => handleDelClick(id)}>X</button>
    </div>
  )
}
