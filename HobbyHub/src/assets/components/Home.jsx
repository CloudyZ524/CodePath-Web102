import React from 'react';

function Home({ postList }) {

    function timeSince(date) {
        const postDate = new Date(date);
        const seconds = Math.floor((new Date() - postDate) / 1000);
      
        let interval = seconds / 3600;
      
        if (interval > 1) {
          return Math.floor(interval) + " hours ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    }
    
    return (
        <div className='home-container'>
            <div className='order-by'>
                <p>Order by:</p>
                <button className='button new-button'>Newest</button>
                <button className='button popular-button'>Most Popular</button>
            </div>
            {postList.map(post => (
                <div className='post-display' key={post.id}>
                    <p>Posted at {timeSince(post.created_time)}</p>
                    <h5>{post.title}</h5>
                    <p>{post.upvote} upvotes</p>
                </div>
            ))}
        </div>
    );
}

export default Home;