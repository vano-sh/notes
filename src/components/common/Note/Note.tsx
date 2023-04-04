import { useAppDispatch, useNotes, useModalNote } from 'shared/model/hooks'
import { INote } from 'shared/model/types/INote'
import { ChangeIcon } from './ui/ChangeIcon'
import { useEffect, useRef } from 'react'

export const Note: React.FC<INote> = ({ id, title, text, tags }) => {
  const { removeNote } = useNotes()
  const { toggleModal } = useModalNote()

  const dispatch = useAppDispatch()

  const textRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (textRef && textRef.current) {
      textRef.current.innerHTML = text
    }
  }, [text])

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
        <button
          className='note__btn-change'
          onClick={() => handleChangeClick(id)}
        >
          <ChangeIcon />
        </button>
        <button className='note__btn-del' onClick={() => handleDelClick(id)}>
          X
        </button>
      </div>
      <div className='note__body' onClick={() => handleShowClick(id)}>
        <h2 className='note__title'>{title}</h2>
        <p className='note__text' ref={textRef}></p>
      </div>
      <div className='note__footer'>
        {tags &&
          tags.map((tag, index) => (
            <span className='note__tag' key={index}>
              {tag}
            </span>
          ))}
      </div>
    </div>
  )
}
