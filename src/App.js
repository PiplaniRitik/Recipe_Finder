import React from 'react'
import Recipe from './components/recipe'
import Navbar from './components/navbar'
import About from './components/about'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div>
      
      <Router>
      <Navbar/>
      <Routes>
      <Route path='/home' element={<Recipe/>} />
      <Route path='/about' element={<About/>} />
    
      </Routes>
      </Router>
    </div>
  )
}

export default App
