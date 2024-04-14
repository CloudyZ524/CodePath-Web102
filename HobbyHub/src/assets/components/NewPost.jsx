import React from 'react';

function NewPost() {
    return (
        <div>
            <div className='post-box'>
                <form>
                    <textarea className='title-box' placeholder='Title'></textarea>
                    <textarea className='content-box' placeholder='Content (Optional)'></textarea>
                    <textarea className='url-box' placeholder='Image URL(Optional)'></textarea>
                    <button className='post-button'>Create Post</button>
                </form>
            </div>
        </div>
    );
}

export default NewPost;