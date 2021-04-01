import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css'

const Book = (props) => {
    const { _id, bookName, bookAuthor, bookPrice, imageURL } = props.book;
    return (
        <div className="card m-3">
            <img src={imageURL} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{bookName}</h5>
                <p className="card-text">{bookAuthor}</p>
                <div className="custom-card-footer">
                    <h6 className="card-text text-primary">${bookPrice}</h6>
                    <Link to={`/checkout/${_id}`} className="btn btn-primary">BUY NOW</Link>
                </div>
            </div>
        </div>
    );
};

export default Book;