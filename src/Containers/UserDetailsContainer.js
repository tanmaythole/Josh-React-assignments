import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import axios from '../axios';
import UserBox from '../components/UserBox/UserBox';
import { userDetails } from '../state/actions';

const UserDetailsContainer = () => {
    let userData = useSelector(state => state.userDetailsReducer);
    let dispatch = useDispatch();

    let { userId } = useParams();

    useEffect(() => {
        axios.get(`/users/${userId}`)
            .then(res => {
                dispatch(userDetails(res.data.data))
            })
    }, [userId])
    

    return (
        <Container className='text-center py-5 bodySection'>
            <UserBox user={userData} />
        </Container>
    )
}

export default UserDetailsContainer;