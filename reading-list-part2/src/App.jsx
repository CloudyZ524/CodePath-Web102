import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import List from './components/List';
import NavBar from './components/NavBar';
import BookDetail from './components/BookDetail';
import BookChart from './components/BookChart';

function App() {
  const [books, setBooks] = useState([]);

  return (
     <BrowserRouter>
      <div className='container'>
        <div className='sidebar'>
          <Header />
          <NavBar />
        </div>
        <div className='main-content'>
          <Routes>
          <Route path="/" element={
              <>
                <List books={books} setBooks={setBooks} />
                <div className="book-chart">
                  <BookChart books={books} />
                </div>
              </>
            } />
            <Route path="/books/:id" element={<BookDetail />} />
          </Routes>
        </div>
      </div>
     </BrowserRouter>
  )
}

export default App
