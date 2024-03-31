import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

function List({ books, setBooks }) {
    const baseURL = "https://openlibrary.org/search.json?author=";
    const startURL = "https://openlibrary.org/search.json?author=tony&sort=new&limit=9"

    const [author, setAuthor] = useState('');
    const [year, setYear] = useState(2024);
    const [edition, setEdition] = useState(0);
    const [readCount, setReadCount] = useState(0);

    const fetchData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setBooks(data.docs);

        const oldestYear = data.docs.reduce((min, book) => {
            const year = book.publish_year.sort()[0]; 
            return year < min ? year : min;
        }, new Date().getFullYear()); 
    
        const mostEditions = data.docs.reduce((max, book) => {
            return book.edition_count > max ? book.edition_count : max;
        }, 0); 

        setYear(oldestYear);
        setEdition(mostEditions);
    }

    useEffect(() => {fetchData(startURL)}, [])

    const handleClick = () => {
        const URL = baseURL + author + "&sort=new&limit=9";
        fetchData(URL);
    }
    
    return (
        <>
        <Card year={year} edition={edition} count={readCount}/>
        <div className='list'>
            <div className='buttonSize'>
                <input value={author} 
                placeholder='Enter Author' 
                onChange={(e) => {setAuthor(e.target.value)}}
                className='input'>
                </input>
                <button className='button' onClick={handleClick}>Search</button>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Authers</th>
                        <th>Year</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                    <tr key={book.key}>
                        <td>{book.title}</td>
                        <td>{book.author_name}</td>
                        <td>{book.publish_year}</td>
                        <td><Link to={`/books/${book.key.split('/')[2]}`}>🔗</Link></td>
                    </tr>))}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default List;