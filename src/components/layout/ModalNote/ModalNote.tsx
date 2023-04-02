import { useState } from 'react'
import { useAppDispatch } from 'shared/model/hooks/hook'
import { useModalNote } from 'shared/model/hooks/useModalNote'
import { useNotes } from 'shared/model/hooks/useNotes'

export const ModalAddNote: React.FC = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const { addNote } = useNotes()
  const { isActive } = useModalNote()

  const dispatch = useAppDispatch()

  const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setTitle(event.target.value)
  }
  const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setText(event.target.value)
  }

  const handleAddNote: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(addNote({ title: title, text: text }))
  }
  return (
    <>
      {isActive && (
        <div className='modal-note'>
          <input value={title} onChange={handleTitleChange} type='text' />
          <input value={text} onChange={handleTextChange} type='text' />
          <button onClick={handleAddNote}>Add Note</button>
        </div>
      )}
    </>
  )
}
