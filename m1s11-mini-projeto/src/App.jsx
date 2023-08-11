import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './App.css'
import { ButtonImageRoutes } from './components/Button/ButtonImageRoutes'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ButtonImageRoutes />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
