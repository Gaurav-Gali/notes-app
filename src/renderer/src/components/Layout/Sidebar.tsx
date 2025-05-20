import SearchBar from '../SearchBar'
import NoteBanner from '../NoteBanner'
import { useAtom } from 'jotai'
import { notesAtom } from '@renderer/store/notes'

const Sidebar = () => {
  const [notes, _] = useAtom(notesAtom)
  return (
    <div className="w-64 h-screen pt-10 px-2">
      <SearchBar />
      <div className="h-[calc(100vh-5.5rem)] flex flex-col gap-1.5 mt-2 overflow-y-auto">
        {notes.map((note) => (
          <div key={note.id}>
            <NoteBanner
              id={note.id}
              noteName={note.noteName}
              createdAt={note.createdAt}
              active={note.active}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
