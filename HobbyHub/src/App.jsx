import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import NewPost from './assets/components/NewPost'
import DetailPost from './assets/components/DetailPost'
import UpdatePost from './assets/components/UpdatePost'
import Delete from './assets/components/Delete'

function App() {
  const [postList, setPostList] = useState([
    {id: 1, title: "Book Recommendation", content: "<>", image: "", upvote: 0, created_time: Date(), comments:[]}
  ]);

  const createPost = (post) => {
    setPostList(...postList, post)
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

  const deletePost = (id) => {
    setPostList(postList.filter(post => post.id !=id))
  }

  return (
    <>
    <BrowserRouter>
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home postList={postList}/>} />
          <Route path='/newpost' element={<NewPost createPost={createPost}/>} />
          <Route path='/post/:id' element={<DetailPost updatePost={updatePost} deletePost={deletePost}/>} />
          <Route path='/update/:id' element={<UpdatePost postList={postList} />} />
          <Route path='/delete' element={<Delete />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
