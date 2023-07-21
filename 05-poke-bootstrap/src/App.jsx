import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index'
import Navbar from './components/Navbar'
import './App.css'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
