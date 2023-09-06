import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage(){

const [charity, getCharity] = useState([])



//  console.log(charity)
useEffect(() => {
    const getApi =  async () => {
        const response = await axios.get(`https://partners.every.org/v0.2/browse/animals?apiKey=pk_live_b05a8e753c108474a4bc46986c53df22`)
    
        // console.log(response.data)
        getCharity(response.data.nonprofits)
     }
    getApi()
}, [])


    return (
        <div className='mainList'>
            {charity.map((char) => (
                <div className='box' key={char.id}>
                     <div className='eachBox'>
                        <Link to={`/charity/${char.name}`}>
                        <h2>{char.name}</h2>
                        <img src={char.logoUrl}/>
                        <h3>{char.location}</h3>
                        </Link>
                        
                     </div>
                   
                  
                </div>
            ))}
        </div>
    )
}