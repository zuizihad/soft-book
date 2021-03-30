import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css'

const Book = (props) => {
    const { name, author, price, imageURL } = props.book;
    return (
        <div class="card m-3">
            <img src={imageURL} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{author}</p>
                <div class="custom-card-footer">
                    <h6 class="card-text text-primary">${price}</h6>
                    <Link class="btn btn-primary">BUY NOW</Link>
                </div>
            </div>
        </div>
    );
};

export default Book;