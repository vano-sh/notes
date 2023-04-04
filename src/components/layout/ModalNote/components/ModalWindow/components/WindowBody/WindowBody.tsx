import { useEffect, useRef, useState } from 'react'
import {
  useAppDispatch,
  useNotes,
  useModalNote,
  useTags,
} from 'shared/model/hooks'
import { findTags, highlightingTags } from 'shared/utils/lib'
import { v4 as uuidv4 } from 'uuid'

interface WindowBodyProps {
  mode: string
}

export const WindowBody: React.FC<WindowBodyProps> = ({ mode }) => {
  const { notes, addNote, changeNote } = useNotes()
  const { idNote, toggleModal } = useModalNote()
  const { addTag } = useTags()

  const note = notes.find((note) => note.id === idNote)

  const [title, setTitle] = useState(note?.title ?? '')
  const [text, setText] = useState(note?.text ?? '')

  const dispatch = useAppDispatch()

  const textRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (textRef && textRef.current && note) {
      textRef.current.innerHTML = note.text
    }
  }, [mode, note])

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

  const handleAddNoteAndTagClick = () => {
    const tags = findTags(text)

    tags.forEach((tag) => dispatch(addTag({ id: uuidv4(), tag })))

    dispatch(
      addNote({ id: uuidv4(), title, text: highlightingTags(text), tags })
    )
    dispatch(toggleModal({ isActive: false, idNote: '', mode: '' }))
  }

  const handleChangeClick = () => {
    if (!idNote) return

    const tags = findTags(text)

    tags.forEach((tag) => dispatch(addTag({ id: uuidv4(), tag })))
    dispatch(
      changeNote({ id: idNote, title, text: highlightingTags(text), tags })
    )
    dispatch(toggleModal({ isActive: false, idNote: '', mode: '' }))
  }

  const handleCloseClick = () => {
    dispatch(toggleModal({ isActive: false, idNote: '', mode: '' }))
  }

  switch (mode) {
    case 'show': {
      if (!note) return null
      return (
        <>
          <h2 className='modal-note__title'>Show note</h2>
          <h3 className='modal-note__title-note'>{note.title}</h3>
          <p className='modal-note__text-note' ref={textRef}></p>
          <button className='modal-note__btn-action' onClick={handleCloseClick}>
            Close
          </button>
        </>
      )
    }
    case 'change': {
      if (!note) return null
      return (
        <>
          <h2 className='modal-note__title'>Change note</h2>
          <input
            className='modal-note__input-title'
            value={title}
            type='text'
            onChange={handleTitleAdd}
          />
          <textarea
            className='modal-note__input-text'
            value={text}
            onChange={handleTextAdd}
          />
          <button
            className='modal-note__btn-action'
            onClick={handleChangeClick}
          >
            Save
          </button>
        </>
      )
    }
    default:
      return (
        <>
          <h2 className='modal-note__title'>Add note</h2>
          <input
            className='modal-note__input-title'
            value={title}
            onChange={handleTitleAdd}
            type='text'
          />
          <textarea
            className='modal-note__input-text'
            value={text}
            onChange={handleTextAdd}
          />
          <button
            className='modal-note__btn-action'
            onClick={handleAddNoteAndTagClick}
          >
            Add Note
          </button>
        </>
      )
  }
}
