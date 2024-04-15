import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Navbar({postList}) {
    const navigate = useNavigate();
    const [searchTitle, setSearchTitle] = useState('');

    const handleSearch = () => {
        const foundPost = postList.find(post => post.title.toLowerCase() === searchTitle.toLowerCase());

        // If a post is found, navigate to the post detail page with the post's id
        if (foundPost) {
            navigate(`/post/${foundPost.id}`);
        } else {
            alert('No post found with that title.');
        }
    }

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h3>SystemDesignHub</h3>
            </div>
            <input value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleSearch();
                }
            }}
            placeholder='Search' className='search-bar'></input>
            <div className="navbar-menu">
                <Link to='/'><p className="navbar-item">Home</p></Link>
                <Link to='/newpost'><p className="navbar-item">Create New Post</p></Link>
            </div>
        </nav>
    );
}

export default Navbar;