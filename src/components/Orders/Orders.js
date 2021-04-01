import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Header from '../Header/Header';
import './Order.css'

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://banana-tart-33572.herokuapp.com/orders?email=${loggedInUser.email}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setOrders(data)
                console.log(data);
            })
    }, [loggedInUser]);
    console.log(orders);
    return (
        <div>
            <Header></Header>
            <table className="order-card">
                <thead>
                    <tr>
                        <th>Book</th>
                        <th>Author</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Pachesing Date</th>
                    </tr>
                </thead>
                {
                    orders.map(order => <tr>
                        <td>{order.bookName}</td>
                        <td>{order.bookAuthor}</td>
                        <td>{order.quantity}</td>
                        <td>{order.bookPrice}</td>
                        <td>{(new Date(order.orderDate)).toDateString('dd/MM/yyyy')}</td>
                    </tr>)
                }
                <tbody>
                </tbody>
            </table>
        </div>
    );
};

export default Orders;