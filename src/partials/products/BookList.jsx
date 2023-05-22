import React, { useState, useEffect } from 'react';

import Book from './Book';
import { searchBooks } from '../../api';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const searchTerm = 'livros'; // Termo de pesquisa inicial
            const results = await searchBooks(searchTerm);
            setBooks(results);
        };
    
        fetchBooks();
    }, []);
        
        return (
            <div className="book-list">
            {books.map((book) => (
                <Book key={book.id} book={book} />
            ))}
            </div>
        );
    };
    
export default BookList;