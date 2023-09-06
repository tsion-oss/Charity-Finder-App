import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import CharityDetailPage from './components/CharityDetailPage'
import FavoritePage from './components/FavoritesPage'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import { NavLink } from 'react-router-dom'

function App() {
 

  return (
    <div className='App'> 
    
    <header>
            <ul>
                <input type='text' 
                        placeholder='Search charitieis....'></input>
                <button>search</button>
                <li><NavLink to='/'>Charity Finder</NavLink></li>
                <li><NavLink to='/favoritepage'>Favorite</NavLink></li>
            </ul>
       </header>
  
     <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/charity/:name' element={<CharityDetailPage/>}/>
       <Route path='/favoritepage' element={<FavoritePage/>}/>
     </Routes>
    </div>
  )
}

export default App
