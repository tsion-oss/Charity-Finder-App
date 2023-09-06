import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import FavoritePage from "./FavoritesPage"

export default function CharityDetailPage() {
    const { name } = useParams()
    const [selectedItem, setSelectedItem] = useState(null)
    const [favoriteItem, setFavoriteItem] = useState(null)

    useEffect(() => {
        const getCharity = async () => {
         
                const response = await axios.get("https://partners.every.org/v0.2/browse/animals?apiKey=pk_live_b05a8e753c108474a4bc46986c53df22")
                const charity = response.data.nonprofits
                const foundCharity = charity.find((char) => char.name === name)

               
                setSelectedItem(foundCharity)
                console.log(response.data.nonprofits)
                
        };

        getCharity();
    }, [name]);

    if (!selectedItem) {
        return <div>Loading...</div>
    }

    const addToFavorite = async (key) => { 
        console.log(key);
   
          
          const response = await axios.get("https://partners.every.org/v0.2/browse/animals?apiKey=pk_live_b05a8e753c108474a4bc46986c53df22");
          const charity = response.data.nonprofits;
      
       
          const foundFavorite = charity.find((char) => char.name === key);
      
          if (foundFavorite) {
            
            const existingFavoritesJSON = localStorage.getItem('favoriteItems');
            let existingFavorites = existingFavoritesJSON ? JSON.parse(existingFavoritesJSON) : [];
      
           
            existingFavorites.push(foundFavorite);
      
         
            const updatedFavoritesJSON = JSON.stringify(existingFavorites);
      
            localStorage.setItem('favoriteItems', updatedFavoritesJSON);
      
            console.log('Added to favorites:', foundFavorite);
          } else {
            console.log('Item not found in charity data');
          }
      
      }
      
      

    return (
        <div className="detailMainBox">
            <div className="detailBox" key={selectedItem.name}>
                    <img style={{ width: '24rem' }} src={selectedItem.coverImageUrl}/>
                    <h1>{selectedItem.name}</h1>
                    <p>{selectedItem.location}</p>
                    <p>{selectedItem.description}</p>
                    <button onClick={() => addToFavorite(selectedItem.name)}>Add to favorite</button>
            </div>
        </div>
    );
}
