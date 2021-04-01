import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css'
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid custom-nav">
                <Link to="/">
                    <a class="navbar-brand">SOFT BOOK</a>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <Link to="/" class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </Link>
                        <Link to="/orders" class="nav-item">
                            <a class="nav-link" href="#">Orders</a>
                        </Link>
                        <Link to="/admin/manageBook" class="nav-item">
                            <a class="nav-link">Admin</a>
                        </Link>
                        <Link to="/deals" class="nav-item">
                            <a class="nav-link">Deals</a>
                        </Link>
                        {
                            (loggedInUser.email) ? (
                                <Link to="/login" class="nav-item">
                                    <a class="nav-link">{loggedInUser.name}</a>
                                </Link>) :
                                (
                                    <Link to="/login" class="nav-item">
                                        <a class="nav-link btn btn-primary">Login</a>
                                    </Link>
                                )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;