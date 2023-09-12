import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import CharityDetailPage from './components/CharityDetailPage'
import FavoritePage from './components/FavoritesPage'
import { Routes, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import search from './images/search.png'

function App() {
 
  const [charity, setCharity] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
 const [filtereCharities, setFilteredCharities] = useState([]);



 const fetchCharityData = async () => {
  try {
    const response = await axios.get(`https://partners.every.org/v0.2/browse/animals?apiKey=pk_live_b05a8e753c108474a4bc46986c53df22`);
    setCharity(response.data.nonprofits);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

useEffect(() => {
  fetchCharityData();
}, []);


 
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCharities = charity.filter((char) =>
    char.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [charit, getCharit] = useState([])

  useEffect(() => {
    const getApi = async () => {
      const response = await axios.get(`https://partners.every.org/v0.2/browse/animals?apiKey=pk_live_b05a8e753c108474a4bc46986c53df22`)

      getCharit(response.data.nonprofits)
    }
  })

  return (
    <div className='App'> 
    
    <header>
      <div className='searchBox'>
              <input type='text' 
                        placeholder='Search charitieis....'
                        value={searchQuery}
                        onChange={handleInputChange}></input>
                <button onClick={fetchCharityData}><img src={search}/></button>
        </div>
            <ul>
               
                <li><NavLink to='/'>Charity Finder</NavLink></li>
                <li><NavLink to='/favoritepage'>Favorite</NavLink></li>
            </ul>
       </header>
    
       <div className="charity-list">
   
       {searchQuery ? (
          filteredCharities.length > 0 ? (
            filteredCharities.map((charity) => (
              <div key={charity.id}>
                <Link to={`/charity/${charity.name}`}>
                   <h2>{charity.name}</h2>
                </Link>
              </div>
            ))
          ) : (
            <p></p>
          )
        ) : (
          <p></p>
        )}
     
     </div>
     

  
     <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/charity/:name' element={<CharityDetailPage/>}/>
       <Route path='/favoritepage' element={<FavoritePage/>}/>
     </Routes>
    </div>
  )
}

export default App
