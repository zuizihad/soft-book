import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + loggedInUser.email, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => setOrders(data))
    }, [loggedInUser]);
    return (
        <div>
            <h2>you have {orders.length} orders</h2>

        </div>
    );
};

export default Orders;