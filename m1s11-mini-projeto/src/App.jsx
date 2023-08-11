import { BrowserRouter } from 'react-router-dom'
import { RoutesApp } from './routes'
import './App.css'
import { ClassNames } from '@emotion/react'

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </>
  )
}

export default App
