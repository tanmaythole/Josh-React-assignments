import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserBox = ({ user }) => {
    let navigate = useNavigate();
    return (
        <div className='text-center py-5 text-light' onClick={() => navigate(`/userDetails/${user.id}`)}>
            <img src={user.avatar} className='rounded-circle' />
            <h2>{user.first_name} {user.last_name}</h2>
            <p className='text-secondary'>{user.email}</p>
        </div>
    );
};

export default UserBox;
