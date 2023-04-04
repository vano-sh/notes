import { Header, ModalNote, NoteList, TagsList } from 'components'

export const App: React.FC = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <NoteList />
        <TagsList />
        <ModalNote />
      </main>
    </>
  )
}
