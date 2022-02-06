import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import LoginForm from '../components/Login/LoginForm';

const LoginContainer = ({ setIsLoggedIn }) => {
    return (
        <div className='container col-md-3 py-5'>
            <Card>
                <CardHeader>
                    <h2>Login</h2>
                </CardHeader>
                <CardBody>
                    <LoginForm setIsLoggedIn={setIsLoggedIn} />
                </CardBody>
            </Card>
        </div>
    );
};

export default LoginContainer;
