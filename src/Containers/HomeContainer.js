import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Container, Row } from 'reactstrap';
import axios from '../axios';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/Navbar/NavBar';
import UserBox from '../components/UserBox/UserBox';
import { addUsersData } from '../state/actions';

const HomeContainer = () => {
    // const [usersData, setUsersData] = useState([]);
    let dispatch = useDispatch();
    let usersData = useSelector(state => state.usersDataReducer)

    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();

    console.log(usersData);

    useEffect(() => {
        axios.get(`/users?page=${page}`)
            .then(res => {
                // setUsersData(usersData.concat(res.data.data));
                
                dispatch(addUsersData(res.data.data))
                
                setTotalPages(res.data.total_pages);
                setLoading(false);
            })
            .catch(err => alert(err))
    }, [page]);


    const changePage = () => {
        setPage(page+1);
    }


    return (
        <div>
            <NavBar />
            <Container style={{minHeight: "calc(100vh - 160px)"}}>
                {loading?(<h1>Loading</h1>):(
                    <>
                        <Row>
                            {usersData.map(e => {
                                return <Col key={e.id} md="3">
                                    <UserBox user={e} />
                                </Col>
                            })}
                        </Row>
                        <div className='text-center py-4'>
                            <Button color='success' className='m-auto' onClick={changePage} disabled={totalPages===page}>Fetch More Users</Button>
                        </div>
                    </>
                )}
            </Container>
            <Footer />
        </div>
    );
};

export default HomeContainer;
