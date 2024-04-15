import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function NewPost({createPost}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [url, setUrl] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        createPost(title, content, url);
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
                    <button type='submit' className='post-button'>Create Post</button>
                </form>
            </div>
        </div>
    );
}

export default NewPost;