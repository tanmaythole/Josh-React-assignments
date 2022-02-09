import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import axios from '../axios';
import UserBox from '../components/UserBox/UserBox';

const UserDetailsContainer = () => {
    const [userData, setUserData] = useState([]);
    let { userId } = useParams();

    useEffect(() => {
        axios.get(`/users/${userId}`)
            .then(res => {
                setUserData(res.data.data)
            })
    }, [])
    

    return (
        <Container className='text-center py-5'>
            <UserBox user={userData} />
        </Container>
    )
}

export default UserDetailsContainer;