import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h3>SystemDesignHub</h3>
            </div>
            <input placeholder='Search' className='search-bar'></input>
            <div className="navbar-menu">
                <Link to='/'><p className="navbar-item">Home</p></Link>
                <Link to='/newpost'><p className="navbar-item">Create New Post</p></Link>
            </div>
        </nav>
    );
}

export default Navbar;