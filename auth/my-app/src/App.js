import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <div>
    <BrowserRouter>
    <div>
      <Header/>
    </div>
    </BrowserRouter>
    </div>
  )
}

export default App