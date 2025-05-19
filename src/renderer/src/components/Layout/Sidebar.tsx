import SearchBar from '../SearchBar'
import NoteBanner from '../NoteBanner'

const Sidebar = () => {
  type Note = {
    id: number
    noteName: string
    createdAt: string
    active: boolean
  }

  const notes: Note[] = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    noteName: `Note ${i + 1}`,
    createdAt: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    active: false
  }))

  return (
    <div className="w-64 h-screen pt-10 px-2">
      <SearchBar />
      <div className="h-[calc(100vh-5.5rem)] flex flex-col gap-1 mt-2 overflow-y-auto">
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
