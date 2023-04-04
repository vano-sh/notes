import { useModalNote } from 'shared/model/hooks'
import { WindowBody } from './components'

export const ModalWindow: React.FC = () => {
  const { mode } = useModalNote()

  return <WindowBody mode={mode} />
}
