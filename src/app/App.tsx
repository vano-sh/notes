import { Header, ModalNote, NoteList, TagsList } from 'components'

export const App: React.FC = () => {
  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <NoteList />
        <TagsList />
        <ModalNote />
      </main>
    </div>
  )
}
