import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddBook from "../AddBook/AddBook";
import ManageBook from '../ManageBook/ManageBook';
import './Admin.css';

const Admin = () => {
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
                            <Link to="/manageBook">
                                <a href="">
                                    <span className="ti-home"></span>
                                    <span>Manage Books</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/addBook'>
                                <a href="">
                                    <span className="ti-face-smile"></span>
                                    <span>Add Book</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/editBook'>
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
                                <Router>
                                    <Switch>
                                        <Route path="/manageBook">
                                            <ManageBook></ManageBook>
                                        </Route>
                                        <Route path="/addBook">
                                            <AddBook></AddBook>
                                        </Route>
                                    </Switch>
                                </Router>

                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Admin;