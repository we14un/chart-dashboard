import React from 'react';
import {useState} from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';

function Login() {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [submitted, setSubmitted] = useState("")
    const navigate = useNavigate()

    const goDashBoard = (e) => {

        e.preventDefault()
        if (username && password) {

            setSubmitted(true)
            navigate('/charts', {replace: true})
            
        }


    }

    return (
        <form onSubmit={goDashBoard}>
            <h2>Welcome to ChartingDashboard!</h2>
            <h5>Username: </h5> <input value={username} onChange= { (e) => setUsername(e.target.value)} /> 
            <h5>Password: </h5> <input type='password' value={password} onChange= { (e) => setPassword(e.target.value)} />
            <h6><a href='./resetpw'>Forget password?</a> </h6>
            <h6><a href='./register'>Not a member? Register here!</a></h6>
            <button type='submit'>Enter</button>
        </form>
    );
}

export default Login