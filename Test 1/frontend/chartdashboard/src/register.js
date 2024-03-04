import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

function Register() {
    // set user input to variable
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [nationality, setNationality] = useState("")
    const [name, setName] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const navigate = useNavigate()


    // async fn to send data to backend by making HTTP req 
    const signIn = async (e) => {
        // prevent default form submission
        e.preventDefault()
        
        if (username && password && nationality && name)  {

            try {

                const response = await axios.post('/registration', {

                    Name: name,
                    Nationality: nationality,
                    Username:  username,
                    Password: password
                    

                })

                if (response) {

                    setSubmitted(true)
                    //redirection
                    navigate('/', { replace: true })

                }


            }

            catch(error) {

                console.log(error)

            }


            
        }

    }

    return (
        // collect form data here
        <form onSubmit={signIn}>

            <h2>Register with us here!</h2>
            <h5>Name: </h5> <input value={name}  onChange= {(e) => setName(e.target.value)}/>
            <h5>Nationality: </h5> <input value={nationality}  onChange= {(e) => setNationality(e.target.value)}/>
            <h5>Username: </h5> <input value={username}  onChange= {(e) => setUsername(e.target.value)}/>
            <h5>Password: </h5> <input type='password' value={password}  onChange= {(e) => setPassword(e.target.value)}/><br/>
            <button type='submit'>Submit</button>
            
        </form> 




    )

}

export default Register