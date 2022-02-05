import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import axios from '../../axios';
import UserBox from './UserBox';

const Home = () => {
    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();


    useEffect(() => {
        axios.get(`/users?page=${page}`)
            .then(res => {
                setUsersData(usersData.concat(res.data.data));
                setTotalPages(res.data.total_pages);
                setLoading(false);
            })
            .catch(err => alert(err))
    }, [page]);
    
    
    return (
        <div>
            <Container>
                {loading?(<h1>Loading</h1>):(
                    <>
                        <Row>
                            {usersData.map(e => {
                                return <Col key={e.id} md="3">
                                    <UserBox user={e} />
                                </Col>
                            })}
                        </Row>
                        <div className='text-center'>
                            <Button color='success' className='m-auto' onClick={() => setPage(page+1)} disabled={totalPages===page}>Fetch More Users</Button>
                        </div>
                    </>
                )}
            </Container>
        </div>
    );
};

export default Home;
