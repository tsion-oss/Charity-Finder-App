import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import search from '../images/search.png'


export default function Nav () {

    return(
        <header>
            <ul>
                <input type='text' 
                        placeholder='Search charitieis....'></input>
                <button><img src={search}/></button>
                <li><NavLink to='/'>Charity Finder</NavLink></li>
                <li><NavLink to='/favoritepage'>Favorite</NavLink></li>
            </ul>
       </header>
    )
}