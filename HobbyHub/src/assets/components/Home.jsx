import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ postList, timeSince }) {
    const navigate = useNavigate();

    const handlePostDetail = (id) => {
        navigate(`/post/${id}`);
    }
    
    return (
        <div className='home-container'>
            <div className='order-by'>
                <p>Order by:</p>
                <button className='button new-button'>Newest</button>
                <button className='button popular-button'>Most Popular</button>
            </div>
            {postList.map(post => (
                <div className='post-display' key={post.id} onClick={() => handlePostDetail(post.id)}>
                    <p>Posted at {timeSince(post.created_time)}</p>
                    <h5>{post.title}</h5>
                    <p>{post.upvote} upvotes</p>
                </div>
            ))}
        </div>
    );
}

export default Home;