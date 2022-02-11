import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap'

const BlogCard = ({ data }) => {
    let navigate = useNavigate();

    const viewBlog = () => {
        navigate(`/blog/${data.id}`)
    }
    return (
        <Card className='my-2'>
            <CardBody>
                <CardTitle tag="h5">
                    {data.id}. {data.title}
                </CardTitle>
                <CardText>
                    {data.body}
                </CardText>
                <Button color='success' onClick={viewBlog}>
                    View More
                </Button>
            </CardBody>
        </Card>
    )
}

export default BlogCard