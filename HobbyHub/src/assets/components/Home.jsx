import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ postList, setPostList, timeSince }) {
    const navigate = useNavigate();

    const handlePostDetail = (id) => {
        navigate(`/post/${id}`);
    }

    const handleSortByTime = () => {
        const sortedByTime = [...postList].sort((a, b) => new Date(b.created_time) - new Date(a.created_time));
        setPostList(sortedByTime);
    }

    const handleSortByVote = () => {
        const sortedByVote = [...postList].sort((a, b) => b.upvote - a.upvote);
        setPostList(sortedByVote);
    }
    
    return (
        <div className='home-container'>
            <div className='order-by'>
                <p>Order by:</p>
                <button onClick={handleSortByTime} className='button new-button'>Newest</button>
                <button onClick={handleSortByVote} className='button popular-button'>Most Popular</button>
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