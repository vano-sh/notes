import { useAppDispatch, useNotes, useTags } from 'shared/model/hooks'
import { ITag } from 'shared/model/types/ITag'

export const Tag: React.FC<ITag> = ({ id, tag }) => {
  const { removeTag } = useTags()
  const { findNote } = useNotes()
  const dispatch = useAppDispatch()

  const handleDelClick = (id: string) => {
    dispatch(removeTag(id))
  }
  const handleFindNoteClick = () => {
    findNote(tag)
  }

  return (
    <div className='tag'>
      <button onClick={handleFindNoteClick}>{tag}</button>
      <button onClick={() => handleDelClick(id)}>X</button>
    </div>
  )
}
