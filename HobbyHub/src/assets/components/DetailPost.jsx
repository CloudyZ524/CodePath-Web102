import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function DetailPost({deletePost, postList, timeSince, updateUpvote}) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        console.log(postList)
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
                <div className='post-display'>
                    <p>Posted at {timeSince(post.created_time)}</p>
                    <h5>{post.title}</h5>
                    <p>{post.content}</p>
                    <p>{post.image}</p>
                    <p onClick={handleUpvote}>👍 </p><p>{post.upvote} upvotes</p>
                    <button onClick={handleUpdate}>✏️ Update</button>
                    <button onClick={handleDelete}>✖️ Delete</button>
                    <div className='comments'>
                        {post.comments.map((comment, i) => (<div key={i}><p> - {comment}</p><br/></div>))}
                        <input value={newComment} onChange={(e) => setNewComment(e.target.value)} 
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