import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css'
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid custom-nav">
                <Link to="/">
                    <a className="navbar-brand">SOFT BOOK</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to="/" className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </Link>
                        <Link to="/orders" className="nav-item">
                            <a className="nav-link" href="#">Orders</a>
                        </Link>
                        <Link to="/admin/manageBook" className="nav-item">
                            <a className="nav-link">Admin</a>
                        </Link>
                        <Link to="/deals" className="nav-item">
                            <a className="nav-link">Deals</a>
                        </Link>
                        {
                            (loggedInUser.email) ? (
                                <Link to="/login" className="nav-item">
                                    <a className="nav-link">{loggedInUser.name}</a>
                                </Link>) :
                                (
                                    <Link to="/login" className="nav-item">
                                        <a className="nav-link btn btn-primary">Login</a>
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