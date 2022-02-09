import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from '../../axios';
import { login } from '../../state/actions';

const LoginForm = () => {
    const [formData, setFormData] = useState({"email":"", "password":""});
    let navigate = useNavigate();
    
    const dispatch = useDispatch();

    const onsubmit = (e) => {
        e.preventDefault();
        axios.post("/login", formData)
            .then(res => {
                localStorage.setItem("token", res.data['token']);
                dispatch(login());
                navigate('/');
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <Form className='form' style={{textAlign:"initial"}} onSubmit={onsubmit}>
                <FormGroup>
                    <Label htmlFor='email'>Email:</Label>
                    <Input id='email' name='email' type='email' placeholder='user@email.com' onChange={e => setFormData({...formData, "email":e.target.value})} value={formData.email} required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>password:</Label>
                    <Input id='password' name='password' type='password' placeholder='Enter Password' onChange={e => setFormData({...formData, "password":e.target.value})} value={formData.password} required />
                    <div style={{textAlign:"right", fontStyle:"italic", color:"#0012fb", cursor:"pointer"}}>forgotten Password?</div>
                </FormGroup>
                
                <div className='d-flex'>
                    <Button color="success" type='submit'>Login</Button>
                    <Button color="secondary" onClick={e => setFormData({"email":"", "password":""})}>Reset</Button>
                </div>

            </Form>
        </div>
    );
};

export default LoginForm;
