import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function FavoritePage(){

    const [fav, setFav] = useState([])
    console.log(fav)

useEffect(() => {

  const favoriteBox = () => {

   const favorites = localStorage.getItem('favoriteItems')

   const foundFavorite = JSON.parse(favorites)

//    console.log(favorites)
   setFav(foundFavorite)
}


favoriteBox()
}, [])
 ;
const deleteFavorite = (key) => {
    console.log(key);
  
    const updatedBox = fav.filter((item) => item.name !== key);
  
    console.log(updatedBox);

    setFav(updatedBox);

    localStorage.setItem('favoriteItems', JSON.stringify(updatedBox));
  }
  

 
    return (
        <div>
            <h1>Favorite page</h1>
            <ul>
         {fav.slice().reverse().map((item, index) => (
            <div key={index}>
                    <h2 >{item.name}</h2>
                    <img src={item.logoUrl}/>
                    <p>{item.location}</p>   
                    <button onClick={() => deleteFavorite(item.name)}>delete</button>
             </div>
          ))}
            </ul>
        </div>
    )
}