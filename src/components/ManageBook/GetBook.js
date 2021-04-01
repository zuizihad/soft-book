import React from 'react';
import '../Admin/Admin.css';

const GetBook = (props) => {
    const { _id, bookName, bookAuthor, bookPrice } = props.book;
    const handleDelete = (id) => {
        const url = `https://banana-tart-33572.herokuapp.com/deleteBook/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then(data => {
                alert('book deleted successfully')
            })
    }
    return (
        <tr>
            <td>{bookName}</td>
            <td>{bookAuthor}</td>
            <td>{bookPrice}</td>
            <td className="span-icon">
                <span className="ti-pencil-alt"></span>
                <span className="ti-trash" onClick={() => handleDelete(_id)}></span>
            </td>
        </tr>
    );
};

export default GetBook;