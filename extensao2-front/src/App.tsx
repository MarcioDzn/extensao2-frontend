import './App.css'
import { TemaCard } from './componentes/cards/TemaCard'

function App() {

  return (
    <>
      <TemaCard 
        title={"Aplicação de IA na detecção de falhas em sistemas embarcados"} 
        teacher={"João Silva"} 
        course={"Engenharia de Computação"} 
        field={"Inteligência Artificial"}
      />
    </>
  )
}

export default App
