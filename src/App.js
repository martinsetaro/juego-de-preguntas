import '../src/scss/app.scss'
import Preguntas from './components/Preguntas'
import Header from './components/Header'

const App = () => {
  return (
    <div className='contenedor_preguntas'>
        <Header/>
        <Preguntas/>
        </div>

  )
}

export default App