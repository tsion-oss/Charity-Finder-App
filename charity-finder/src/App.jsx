import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import CharityDetailPage from './components/CharityDetailPage'
import FavoritePage from './components/FavoritesPage'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
 

  return (
    <div className='App'> 
    
         <Nav/>
  
     <Routes>
       <Route path='/home' element={<HomePage/>}/>
       <Route path='/home/:id' element={<CharityDetailPage/>}/>
       <Route path='/favoritepage' element={<FavoritePage/>}/>
     </Routes>
    </div>
  )
}

export default App
