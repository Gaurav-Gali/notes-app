import Sidebar from './components/Layout/Sidebar'
import Content from './components/Layout/Content'
import DragableTopBar from './components/Layout/DragableTopBar'
import { useAtom } from 'jotai'
import { notesAtom } from '@renderer/store/notes'

const App = () => {
  const [notes, setNotes] = useAtom(notesAtom)

  let activeNote = notes.find((note) => note.active)
  let activeId: number | null = activeNote?.id || null

  if (!activeNote && notes.length > 0) {
    const updatedNotes = notes.map((note, index) => {
      if (index === 0) {
        return { ...note, active: true }
      }
      return note
    })

    setNotes(updatedNotes)

    activeId = notes[0].id
  }

  return (
    <div>
      <DragableTopBar />
      <div className="flex bg-transparent h-screen">
        <Sidebar />
        {activeId !== null ? (
          <Content id={activeId} />
        ) : (
          <div className="flex-1 border-l border-l-zinc-900/50 bg-zinc-900/30 flex items-center justify-center text-zinc-100/30">
            No notes available
          </div>
        )}
      </div>
    </div>
  )
}

export default App
