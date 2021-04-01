import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect((loading) => {
        fetch('https://banana-tart-33572.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setBooks(data)
            })
    }, [])
    return (
        <>
            <Header></Header>
            {
                loading ? (
                    <div class="d-flex justify-content-center text-muted mt-5">
                        <div class="spinner-border" role="status">
                            <span class="sr-only ">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="home">
                        {
                            books.map(book => <Book book={book}></Book>)
                        }
                    </div>
                )
            }
        </>
    );
};

export default Home;