import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to='/' className='navbar-brand'>Blog App</Link>
            <ul className='navbar-nav navbar-brand ml-auto'>
                <NavLink to='/' exact activeClassName={'activeLink'}  className='nav-link'>Home</NavLink>
                <NavLink to='/login' activeClassName={'activeLink'}  className='nav-link '>Login</NavLink>
                <NavLink to='/register' activeClassName={'activeLink'}  className='nav-link'>Register</NavLink>
            </ul>
        </nav>

        {/* <img src="/images/baros.jpg" alt=""/> */}
        </>
    )
}
