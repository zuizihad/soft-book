import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";

const AddBook = () => {
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const bookData = {
            name: data.name,
            author: data.author,
            price: data.price,
            imageURL: imageURL
        };
        const url = `http://localhost:5000/addBook`
        console.log(bookData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(response => {
                console.log(response)
            })
    };
    const handleImage = event => {
        const imageData = new FormData()
        imageData.set('key', 'bcaa76da5c37cf7520b24da6b76c88ea');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                // console.log(res.data.data.display_url)
                setImageURL(res?.data?.data?.display_url)
            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" defaultValue="Complete fundamental javascript" ref={register} />
            <br />
            <input name="author" defaultValue="Zihadul Islam" ref={register} />
            <br />
            <input name="price" defaultValue="350" ref={register} />
            <br />
            <input name="exampleRequired" type="file" onChange={handleImage} />
            <br />
            {errors.exampleRequired && <span>This field is required</span>}
            <br />
            <input type="submit" />
        </form>
    );
};

export default AddBook;