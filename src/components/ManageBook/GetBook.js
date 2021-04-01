import React from 'react';
import '../Admin/Admin.css';
const GetBook = (props) => {
    const { _id, bookName, bookAuthor, bookPrice } = props.book;

    const handleDelete = (id) => {

        fetch('http://localhost:5000/deleteBook/' + id)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
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