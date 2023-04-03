import { useState } from 'react'
import {
  useAppDispatch,
  useNotes,
  useModalNote,
  useTags,
} from 'shared/model/hooks'
import { findTags } from 'shared/utils/lib'

export const ModalWindow: React.FC = () => {
  const { notes, addNote, changeNote } = useNotes()
  const { idNote, mode, toggleModal } = useModalNote()
  const { tags, addTag, removeTag } = useTags()

  const note = notes.find((note) => note.id === idNote)

  const [title, setTitle] = useState(note?.title ?? '')
  const [text, setText] = useState(note?.text ?? '')

  const dispatch = useAppDispatch()

  const handleTitleAdd: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setTitle(event.target.value)
  }
  const handleTextAdd: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setText(event.target.value)
  }
  const handleAddNote = () => {
    dispatch(addNote({ id: new Date().toISOString(), title, text }))
    dispatch(toggleModal({ isActive: false, idNote: '', mode: '' }))

    const tags = findTags(text)

    tags.map((tag) => dispatch(addTag({ tag, idNote })))
  }
  const handleCloseClick = () => {
    dispatch(toggleModal({ isActive: false, idNote: '', mode: '' }))
  }
  const handleChangeClick = () => {
    if (idNote) dispatch(changeNote({ id: idNote, title, text }))
    dispatch(toggleModal({ isActive: false, idNote: '', mode: '' }))
  }

  switch (mode) {
    case 'show': {
      if (!note) return null
      return (
        <>
          <h2>{note.title}</h2>
          <p>{note.text}</p>
          <button onClick={handleCloseClick}>Close</button>
        </>
      )
    }
    case 'change': {
      if (!note) return null
      return (
        <>
          <input value={title} type='text' onChange={handleTitleAdd} />
          <textarea value={text} onChange={handleTextAdd} />
          <button onClick={handleChangeClick}>Save</button>
        </>
      )
    }
    default:
      return (
        <>
          <input value={title} onChange={handleTitleAdd} type='text' />
          <textarea value={text} onChange={handleTextAdd} />
          <button onClick={handleAddNote}>Add Note</button>
        </>
      )
  }
}
