import axios from 'axios'
import { useEffect, useState } from 'react'

export default function HomePage(){

const [charity, getCharity] = useState([])



 console.log(charity)
useEffect(() => {
    const getApi =  async () => {
        const response = await axios.get(`https://partners.every.org/v0.2/browse/animals?apiKey=pk_live_b05a8e753c108474a4bc46986c53df22`)
    
        console.log(response.data)
        getCharity(response.data.nonprofits)
     }
    getApi()
}, [])


    return (
        <div>
            {charity.map((char) => (
                <div key={char._id}>
                  <h2>{char.name}</h2>
                   <img src={char.logoUrl}/>
                   <h3>{char.location}</h3>
                </div>
            ))}
        </div>
    )
}