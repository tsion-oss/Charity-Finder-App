import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';


export default function Nav () {

    const [charity, setCharity] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
  
    useEffect(() => {
      const getApi = async () => {
        const response = await axios.get(`https://partners.every.org/v0.2/browse/animals?apiKey=pk_live_b05a8e753c108474a4bc46986c53df22`);
        setCharity(response.data.nonprofits);
      };
      getApi();
    }, [])
  
    // Event handler for input change
    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    // Filter the list of charities based on the search query
    const filteredCharities = charity.filter((char) =>
      char.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return(
        <header>
            <ul>
                <input type='text' 
                        placeholder='Search charitieis....'></input>
                <button>search</button>
                <li><NavLink to='/'>Charity Finder</NavLink></li>
                <li><NavLink to='/favoritepage'>Favorite</NavLink></li>
            </ul>
       </header>
    )
}