import { INote } from 'shared/model/types/INote'

export const Note: React.FC<INote> = ({ title, text }) => {
  return (
    <div className='note'>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
