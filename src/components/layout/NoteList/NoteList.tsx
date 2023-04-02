import { Note } from '../../common'
import { useNotes } from 'shared/model/hooks/useNotes'
import { ModalAddNote } from '../ModalNote/ModalNote'
import { AddBtn } from './components'

export const NoteList: React.FC = () => {
  const { notes } = useNotes()
  return (
    <>
      <div className='notes'>
        {notes && notes.map((note) => <Note {...note} key={note.id} />)}

        <AddBtn />
      </div>
    </>
  )
}
