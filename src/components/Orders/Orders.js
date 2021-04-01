import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Header from '../Header/Header';
import './Order.css'

const Orders = () => {
    const [loading, setLoading] = useState(true);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://banana-tart-33572.herokuapp.com/orders?email=${loggedInUser.email}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setOrders(data)
                setLoading(false)
            })
    }, [loggedInUser]);
    console.log(orders);
    return (
        <div>
            <Header></Header>
            {
                loading ? (
                    <div class="d-flex justify-content-center text-muted mt-5">
                        <div class="spinner-border" role="status">
                            <span class="sr-only ">Loading...</span>
                        </div>
                    </div>
                ) : (
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

                )
            }

        </div>
    );
};

export default Orders;