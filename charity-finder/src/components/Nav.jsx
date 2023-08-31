import { NavLink } from 'react-router-dom'

export default function Nav () {
    return(
        <header>
            <ul>
                <li><NavLink to='/home'>Charity Finder</NavLink></li>
                <li><NavLink to='/favoritepage'>Favorite</NavLink></li>
            </ul>
       </header>
    )
}