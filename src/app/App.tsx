import { Header, ModalAddNote, NoteList, TagsList } from 'components'

export const App: React.FC = () => {
  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <NoteList />
        <TagsList />
        <ModalAddNote />
      </main>
    </div>
  )
}
