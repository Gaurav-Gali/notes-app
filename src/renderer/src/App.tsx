import Sidebar from './components/Layout/Sidebar'
import Content from './components/Layout/Content'
import DragableTopBar from './components/Layout/DragableTopBar'

const App = () => {
  return (
    <div>
      <DragableTopBar />
      <div className="flex bg-transparent h-screen">
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}

export default App
