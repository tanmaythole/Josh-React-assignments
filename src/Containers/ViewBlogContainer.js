import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'reactstrap';

const ViewBlogContainer = () => {
    const { blogId } = useParams();
    const [blogData, setBlogData] = useState({});

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
            .then(res => {
                setBlogData(res.data);
            })
            .catch(err => console.log(err))
    }, [blogId])
    
    
    return (
        <Container className='col-md-5 py-5 text-light bodySection'>
            <h2>{blogData.id}. {blogData.title}</h2>
            <p className='py-3 text-secondary'>{blogData.body}</p>
        </Container>
    )
}

export default ViewBlogContainer