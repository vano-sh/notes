import { ITag } from 'shared/model/types/ITag'

export const Tag: React.FC<ITag> = ({ idNote, tag }) => {
  return <div>{tag}</div>
}
