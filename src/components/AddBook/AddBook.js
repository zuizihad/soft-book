import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import '../Admin/Admin.css'

const AddBook = () => {
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const bookData = {
            bookName: data.name,
            bookAuthor: data.author,
            bookPrice: data.price,
            imageURL: imageURL
        };
        const url = `https://banana-tart-33572.herokuapp.com/addBook`
        console.log(bookData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(response => {
                alert('book added successfully')
                console.log(response)
            })
    };
    const handleImage = event => {
        const imageData = new FormData()
        imageData.set('key', 'bcaa76da5c37cf7520b24da6b76c88ea');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setImageURL(res?.data?.data?.display_url)
            })
            .catch(err => {
                console.log(err)
            })
    }
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
                                <a>
                                    <span className="ti-home"></span>
                                    <span>Manage Books</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/admin/addBook'>
                                <a>
                                    <span className="ti-face-smile"></span>
                                    <span>Add Book</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/admin/editBook'>
                                <a>
                                    <span className="ti-agenda"></span>
                                    <span>Edit Book</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="main-content">
                <main>
                    <section className="recent">
                        <div className="activity-grid">
                            <div className="activity-card">
                                <h3>Add Book</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text ti-agenda" id="basic-addon1"></span>
                                        <input type="text" className="form-control" name="name" defaultValue="Complete fundamental javascript" ref={register} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                        <span className="input-group-text ti-user" id="basic-addon1"></span>
                                        <input type="text" className="form-control" name="author" defaultValue="Zihadul Islam" ref={register} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text ti-money" id="basic-addon1"></span>
                                        <input type="text" className="form-control" name="price" defaultValue="350" ref={register} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                        <span className="input-group-text ti-image" id="basic-addon1"></span>
                                        <input name="exampleRequired" type="file" onChange={handleImage} className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                    </div>
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    <br />
                                    <input type="submit" className="btn btn-primary m-4" />
                                </form>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div >

    );
};

export default AddBook;