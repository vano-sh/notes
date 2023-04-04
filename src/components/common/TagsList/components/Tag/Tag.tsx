import { useAppDispatch, useNotes, useTags } from 'shared/model/hooks'
import { ITag } from 'shared/model/types/ITag'

export const Tag: React.FC<ITag> = ({ id, tag }) => {
  const { removeTag } = useTags()
  const { findNoteOn } = useNotes()
  const dispatch = useAppDispatch()

  const handleDelClick = (id: string) => {
    dispatch(removeTag(id))
  }
  const handleFindNoteClick = () => {
    dispatch(findNoteOn(tag))
  }

  return (
    <div className='tags__tag'>
      <button className='tags__text' onClick={handleFindNoteClick}>
        {tag}
      </button>
      <button className='tags__btn-del' onClick={() => handleDelClick(id)}>
        X
      </button>
    </div>
  )
}
