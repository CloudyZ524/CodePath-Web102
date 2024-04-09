import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <Link to='/'><h4>Home</h4></Link>
            <Link to='/create'><h4>Create a Crewmate!</h4></Link>
            <Link to='/gallery'><h4>Crewmate Gallery</h4></Link>
        </div>
    );
}

export default Navbar;