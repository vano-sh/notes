import { Note } from '../../common'
import { useNotes } from 'shared/model/hooks'

export const NoteList: React.FC = () => {
  const { notes } = useNotes()

  return (
    <>
      <div className='notes'>
        {notes && notes.map((note) => <Note {...note} key={note.id} />)}
      </div>
    </>
  )
}
