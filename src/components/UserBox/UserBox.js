import React from 'react';

const UserBox = ({ user }) => {
    return (
        <div className='text-center py-5 text-light'>
            <img src={user.avatar} className='rounded-circle' />
            <h2>{user.first_name} {user.last_name}</h2>
            <p className='text-secondary'>{user.email}</p>
        </div>
    );
};

export default UserBox;
