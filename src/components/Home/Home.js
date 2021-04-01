import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://banana-tart-33572.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <>
            <Header></Header>
            <div className="home">
                {
                    books.map(book => <Book book={book}></Book>)
                }
            </div>
        </>
    );
};

export default Home;