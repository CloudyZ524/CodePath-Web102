import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import NewPost from './assets/components/NewPost'
import DetailPost from './assets/components/DetailPost'
import UpdatePost from './assets/components/UpdatePost'
import './App.css'

function App() {
  const [postList, setPostList] = useState([
    {id: 1, title: "Book Recommendation", content: "<System Design Interview> from Alex Xu. Bought it from Amazon!", image: "https://m.media-amazon.com/images/I/51vZ6t5W4gL._AC_UF1000,1000_QL80_.jpg", upvote: 5, created_time: "2024-04-15T12:00:00Z", comments:["Thanks for sharing!"]},
    {id: 2, title: "How to prepare interview 😭", content: "I have an upcoming interview for software engineer. How to prepare system design questions for interview? Thanks!", image: "", upvote: 1, created_time: "2024-04-15T20:00:00Z", comments:["Good Luck!"]}
  ]);

  const createPost = (title, content, url) => {
    const newPost = {id: postList.length + 1, title: title, content: content, image: url, upvote: 0, created_time: Date(), comments:[]};
    setPostList([...postList, newPost]);
  }

  const updatePost = (id, newTitle, newContent, newImage, newTime) => {
    setPostList(
      postList.map((post) => {
        if (post.id === id) {
          return {...post, title: newTitle, content: newContent, image: newImage, created_time: newTime}
        } else {
          return post;
        }
      })
    )
  }

  const updateUpvote = (id, newUpvote) => {
    setPostList(
      postList.map((post) => {
        if (post.id === id) {
          return {...post, upvote: newUpvote}
        } else {
          return post;
        }
      })
    )
  }

  const deletePost = (id) => {
    setPostList(postList.filter(post => post.id !=id))
  }

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
    <>
    <BrowserRouter>
      <div className='navbar'>
        <Navbar postList={postList}/>
      </div>
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home postList={postList} setPostList={setPostList} timeSince={timeSince}/>} />
          <Route path='/newpost' element={<NewPost createPost={createPost}/>} />
          <Route path='/post/:id' element={<DetailPost deletePost={deletePost} postList={postList} timeSince={timeSince} updateUpvote={updateUpvote}/>} />
          <Route path='/update/:id' element={<UpdatePost updatePost={updatePost} postList={postList}/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
