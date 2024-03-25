import React, { useEffect, useState } from 'react';
import Card from './Card';

function List() {
    const baseURL = "https://openlibrary.org/search.json?author=";
    const startURL = "https://openlibrary.org/search.json?author=tony&sort=new&limit=10"

    const [books, setBooks] = useState([]);
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
        const URL = baseURL + author + "&sort=new&limit=10";
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
                        <th>Book Title</th>
                        <th>Authers</th>
                        <th>Publish Year</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                    <tr key={book.key}>
                        <td>{book.title}</td>
                        <td>{book.author_name}</td>
                        <td>{book.publish_year}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default List;