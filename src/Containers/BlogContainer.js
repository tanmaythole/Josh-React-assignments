import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'reactstrap';
import BlogCard from '../components/Blogs/BlogCard';
import { addBlogs } from '../state/actions';

const BlogContainer = () => {
    let blogs = useSelector(state => state.blogsReducer);
    let dispatch = useDispatch();
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                dispatch(addBlogs(res.data));
            })
            .catch(err => console.log(err))
    }, [])
    
        
    return (
        <div className='container py-5 bodySection'>
            <h1 className='text-light'>Blogs</h1>
            <Row>
                {blogs.map(e => {
                    return <Col md="3" className='d-flex' key={e.id}>
                        <BlogCard data={e} />
                    </Col>
                })}
            </Row>
        </div>
    )
}

export default BlogContainer;