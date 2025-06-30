import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './logo.jpg'
import "./Navbar.css"
import ViewNotes from "./ViewNotes"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';



import Notes from './Notes';

const Navbar = () => {
    const dispatch = useDispatch();


    return (
        <div className='flex items-center gap-8 bg-gray-950 text-white p-5 justify-evenly'>
            <div>

                <img src={logo} alt='logo' className='h-10 w-auto' />
                <h1 id="heading">NOTES</h1>
            </div>

            <div className='flex ml-2 gap-6 justify-center'>

                <NavLink to="/" className="hover:text-yellow-400 font-[cursive] text-2xl">
                    Home
                </NavLink>

                <NavLink to="/Notes" className="hover:text-yellow-400 font-[cursive] text-2xl">
                    Notes
                </NavLink>

            </div>

            {/* <NavLink to="/Notes/:id" className="hover:text-yellow-400 font-[cursive] text-2xl ml-[80px]">
                Search
                <input type="search"
                    //value={searchTerm}
                    id="search-item"
                    onChange={(e) => dispatch(setGlobalSearchTerm(e.target.value))}
                />
            </NavLink> */}
        </div>
    )
}

export default Navbar
