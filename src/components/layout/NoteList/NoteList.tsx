import { useEffect } from 'react'
import { Note } from '../../common'
import { useAppDispatch, useNotes } from 'shared/model/hooks'

export const NoteList: React.FC = () => {
  const { notes, addNote, fetchNotes } = useNotes()
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <>
      <div className='notes'>
        {notes && notes.map((note) => <Note {...note} key={note.id} />)}
      </div>
    </>
  )
}
