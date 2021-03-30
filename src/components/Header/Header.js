import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid custom-nav">
                <a class="navbar-brand" href="#">SOFT BOOK</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Orders</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Admin</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Deals</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn btn-primary" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;