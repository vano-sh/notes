import { Note } from '../../common'
import { useAppDispatch, useNotes } from 'shared/model/hooks'

export const NoteList: React.FC = () => {
  const { mode, notes, outputFound, findNoteOff } = useNotes()

  const dispatch = useAppDispatch()

  const handleFindOffClick = () => {
    dispatch(findNoteOff())
  }
  return (
    <>
      <div className='notes'>
        {mode.id === 'all' &&
          notes &&
          notes.map((note) => <Note {...note} key={note.id} />)}

        {mode.id === 'search' &&
          outputFound &&
          outputFound.map((note) => (
            <>
              <div className='notes__find'>
                <h2 className='notes__find-title'>
                  Found by tag:
                  <span className='notes__find-tag'>{mode.tagFind}</span>
                </h2>
                <button
                  className='notes__find-reset'
                  onClick={handleFindOffClick}
                >
                  Reset
                </button>
              </div>
              <Note {...note} key={note.id} />
            </>
          ))}
      </div>
    </>
  )
}
