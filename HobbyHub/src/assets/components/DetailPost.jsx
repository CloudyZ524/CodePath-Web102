import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function DetailPost({deletePost, postList, timeSince, updateUpvote}) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const foundPost = postList.find((c) => c.id.toString() === id);
        setPost(foundPost);
    }, [id, postList]);

    const handleUpdate = () => {
        navigate(`/update/${id}`);
    }

    const handleDelete = () => {
        deletePost(parseInt(id, 10));
        navigate('/');
    }

    const handleUpvote = () => {
        updateUpvote(parseInt(id, 10), post.upvote + 1);
    }

    const handleNewComment = () => {
        if (!newComment.trim()) return;
        const updatedComments = [...post.comments, newComment];
        setPost({ ...post, comments: updatedComments });
        setNewComment(''); 
      };

    return (
        post ? (
            <div>
                <div className='post-detail'>
                    <p>Posted at {timeSince(post.created_time)}</p>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <img src={post.image} style={{height: '200px'}} alt="Invalid URL"/>
                    <p className="upvote-section" onClick={handleUpvote}>
                        👍 <span>{post.upvote} upvotes</span>
                    </p>
                    <button onClick={handleUpdate}>✏️ Update</button>
                    <button onClick={handleDelete}>✖️ Delete</button>
                    <div className='comments-display'>
                        {post.comments.map((comment, i) => (<div key={i}><p> - {comment}</p></div>))}
                        <input className='inputComment' value={newComment} onChange={(e) => setNewComment(e.target.value)} 
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleNewComment();
                            }
                        }}
                        placeholder='Leave a comment...'/>
                    </div>
                </div>
            </div>
        ) : (
            <p>Post not found</p>
        )
    );
}

export default DetailPost;