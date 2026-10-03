import './App.css'
import TemaList from './componentes/cards/TemaList'
import { temas } from './mocks/tema'

function App() {

  return (
    <>
      <TemaList 
        temas={temas}
      />
    </>
  )
}

export default App
