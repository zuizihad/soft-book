import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../Admin/Admin.css';
import GetBook from "./GetBook";

const ManageBook = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
    }, [])
    return (
        <div>
            <input type="checkbox" name="" id="sidebar-toggle" value="" />
            <div className="sidebar">
                <div className="sidebar-header">
                    <h3 className="brand">
                        <span className="ti-unlink"></span>
                        <span>soft book</span>
                    </h3>
                    <label for="sidebar-toggle" className="ti-menu-alt"></label>
                </div>
                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <Link to="/admin/manageBook">
                                <a href="">
                                    <span className="ti-home"></span>
                                    <span>Manage Books</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/admin/addBook'>
                                <a href="">
                                    <span className="ti-face-smile"></span>
                                    <span>Add Book</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/admin/editBook'>
                                <a href="">
                                    <span className="ti-agenda"></span>
                                    <span>Edit Book</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* main */}
            <div className="main-content">
                <main>
                    <section className="recent">
                        <div className="activity-grid">
                            <div className="activity-card">
                                <h3>Add Book</h3>
                                <div className="table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Book Name</th>
                                                <th>Author Name</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                books.map(book => <GetBook id={book._id} book={book}></GetBook>)
                                            }
                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>

    );
};

export default ManageBook;