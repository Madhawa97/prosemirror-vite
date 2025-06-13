import './App.css'
import ProseMirrorEditor from './components/ProseMirrorEditor'

function App() {

  return (
    <>
      <h1>ProseMirror Demo</h1>
      <ProseMirrorEditor content={"How about this as a start"} onChange={undefined}/>
    </>
  )
}

export default App
