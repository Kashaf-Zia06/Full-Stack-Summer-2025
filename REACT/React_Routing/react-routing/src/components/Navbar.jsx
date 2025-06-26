import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import './Navbar.css'

const Navbar = () => {
    return (
        <div id="nav">
            <ul>
                <li>
                    {/* <Link to="/"> */}
                    <NavLink to="/" className={({ isActive }) => isActive ? "is-active" : ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    {/* <Link to="/About"> */}
                    <NavLink to="/About" className={({ isActive }) => isActive ? "is-active" : ""}>
                        About
                    </NavLink>
                    {/* </Link> */}
                </li>
                <li>
                    {/* <Link to="/Contact"> */}
                    <NavLink to="/Contact" className={({isActive})=>isActive?"is-active":""}>
                        Contact
                    </NavLink>
                    {/* </Link> */}
                </li>
            </ul>

        </div>
    )
}

export default Navbar
