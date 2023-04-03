import { useTags } from 'shared/model/hooks'
import { Tag } from './components'

export const TagsList: React.FC = () => {
  const { tags } = useTags()

  return (
    <div className='tags'>
      <h2>Tags</h2>
      {tags && tags.map((tag) => <Tag {...tag} key={tag.id} />)}
    </div>
  )
}
