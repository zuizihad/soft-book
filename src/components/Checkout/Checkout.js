import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { userContext } from '../../App';
import Header from '../Header/Header';
import './Checkout.css'
const Checkout = () => {
    const history = useHistory();
    const [book, setBook] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { id } = useParams();
    const { name, email } = loggedInUser;
    const { _id, bookName, bookAuthor, bookPrice, imageURL } = book;


    const handleCheckout = () => {
        const newCheckout = {
            userName: name,
            userEmail: email,
            bookID: _id,
            bookName: bookName,
            bookPrice: bookPrice,
            bookImage: imageURL,
            bookAuthor: bookAuthor,
            quantity: 1,
            orderDate: new Date()
        }
        const url = `http://localhost:5000/checkout`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCheckout)
        })
            .then(response => {
                console.log('server side response', response)
                alert('order placed');
                history.push('/')
            })
    };
    console.log(loggedInUser)
    useEffect(() => {
        fetch('http://localhost:5000/book/' + id)
            .then(res => res.json())
            .then(data => {
                setBook(data)
            })
    }, [id])
    console.log(book)
    console.log(loggedInUser)
    return (
        <div>
            <Header></Header>
            <h2 className="text-center text-success my-5">Checkout</h2>
            <div className="card-checkout">
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>{bookName}</th>
                                <th>{1}</th>
                                <th>${bookPrice}</th>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-primary" onClick={handleCheckout}>checkout</button>
                </div>
            </div>

        </div>
    );
};

export default Checkout;