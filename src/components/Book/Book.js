import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css'

const Book = (props) => {
    const { _id, bookName, bookAuthor, bookPrice, imageURL } = props.book;
    return (
        <div class="card m-3">
            <img src={imageURL} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{bookName}</h5>
                <p class="card-text">{bookAuthor}</p>
                <div class="custom-card-footer">
                    <h6 class="card-text text-primary">${bookPrice}</h6>
                    <Link to={`/checkout/${_id}`} class="btn btn-primary">BUY NOW</Link>
                </div>
            </div>
        </div>
    );
};

export default Book;