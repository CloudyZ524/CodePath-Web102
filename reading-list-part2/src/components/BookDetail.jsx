import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function BookDetail() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        // Fetch book details using the id
        const fetchBookDetail = async () => {
            const bookResponse = await fetch(`https://openlibrary.org/works/${id}.json`);
            const bookData = await bookResponse.json();
            setBook(bookData);

            // Fetch author details
            const authorPromises = bookData.authors.map(async (authorRole) => {
                const authorResponse = await fetch(`https://openlibrary.org${authorRole.author.key}.json`);
                const authorData = await authorResponse.json();
                return authorData;
            });
            const authorDetails = await Promise.all(authorPromises);
            setAuthors(authorDetails[0].name);
            };

        fetchBookDetail();
    }, [id]);

    return (
        <div>
            {book ? (
                <div>
                    <h2>{book.title}</h2>
                    <p>Author: {authors}</p>
                    <p>Subjects: {book.subjects ? book.subjects.join(', ') : 'N/A'}</p>
                    <p>Description: {book.description || 'N/A'}</p>
                </div>
            ) : (
                <p>No Book Found...</p>
            )}
        </div>
    );
}

export default BookDetail;