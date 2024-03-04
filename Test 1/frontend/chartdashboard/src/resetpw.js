import react from 'react'
import {useState} from 'react'

function Reset() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [reconfirmpw, setReconfirmpw] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [checkpw, setCheckpw] = useState(false)

    const checkPasswordMatch = (e) => {
        e.preventDefault()
        if (reconfirmpw === password) {
            setCheckpw(true)
            setSubmitted(true)
        }
        else {
            setCheckpw(false)
            setSubmitted(true)
            setPassword('')
            setReconfirmpw('')
        }
    }

    return (

        <form onSubmit={checkPasswordMatch}>

            <h2>Reset your password here!</h2>
            <h5>Username:</h5> <input value={username} onChange= {(e) => e.target.value} />
            <h5>New Password:</h5> <input type='password' value={password} onChange= {(e) => e.target.value} />
            <h5>Reconfirm your password:</h5> <input type='password' value={reconfirmpw} onChange= {(e) => e.target.value} /><br/>
            <button class='submit'>Submit</button><br/>
            {!checkpw && submitted ? 'Please submit again!' : 'Thank you!'}
            

        </form>

        

    )

}

export default Reset