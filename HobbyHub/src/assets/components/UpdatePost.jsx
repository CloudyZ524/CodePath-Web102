import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function UpdatePost({updatePost, postList}) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        const foundPost = postList.find((c) => c.id.toString() === id);
        if (foundPost) {
            setPost(foundPost);
            setTitle(foundPost.title);
            setContent(foundPost.content);
            setUrl(foundPost.image);
        }
    }, [id, postList]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updatePost(parseInt(id, 10), title, content, url, new Date());
        navigate('/');
    }

    return (
        <div>
            <div className='post-box'>
                <h3>✏️ Create a new Post!</h3>
                <form onSubmit={handleSubmit}>
                    <textarea value={title} onChange={(e) => setTitle(e.target.value)} className='title-box' placeholder='Title'></textarea>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} className='content-box' placeholder='Content (Optional)'></textarea>
                    <textarea value={url} onChange={(e) => setUrl(e.target.value)} className='url-box' placeholder='Image URL(Optional)'></textarea>
                    <button type='submit' className='post-button'>Update Post</button>
                </form>
            </div>
        </div>
    );
}

export default UpdatePost;