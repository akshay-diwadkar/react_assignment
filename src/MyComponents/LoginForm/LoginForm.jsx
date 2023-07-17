import { useState } from "react"
import MyButton from "../MyButton/MyButton"
import MyTextField from "../MyTextField/MyTextField"
import background from "./login-bg.jpg";
import './LoginForm.css'
import { styled } from "@mui/system";
import MyPasswordField from "../MyTextField/MyPasswordField"
import { validEmail, validPassword } from "../Regex/Regex"
import { Alert, Card, TextField} from "@mui/material"
import { Lock } from "@mui/icons-material";

const LoginForm = ({...props}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false)
    
    const handleOnClick = () => {
        setButtonClicked(true);
        if (!validEmail.test(email)) {
            setError(true)
            setMessage("Invalid Email!")
        } else if (!validPassword.test(password)) {
            setError(true)
            setMessage("Invalid/Weak Password")
        } else {
            setError(false)
            setMessage("Logged In Successfully!")
            props.authenticate(true)
        }
    }

    const alert = <Alert severity={error ? 'error' : 'success'}>{message}</Alert>

    return <div 
    style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        position: "absolute",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",}}>
        <Card sx={{ height: '90%', width: '25%', justifyContent:'center', paddingLeft: '50px', paddingRight:'50px', marginTop:"20px", marginLeft: '20px', paddingTop: '10px'}}>
            <Lock fontSize="large" style={{paddingLeft: '45%', paddingTop: '50px', paddingBottom: '10px', color: '#4952d1'}}></Lock>
            <h1>Rick & Morty</h1>
            <h5>A Collection of Rick & Morty characters, locations & episodes</h5>
            <MyTextField 
                id="outlined-basic"
                label="Email Address" 
                placeholder={"Eg. john@doe.com"} 
                value={email} 
                style={{width: '300px'}}
                onChange={(e) => {
                    setEmail(e.target.value)
                    console.log(e.target.value)
                }} 
                />
            <br />
            <MyPasswordField
                id="outlined-adornment-password"
                label="Password" 
                value={password} 
                width='300px'
                onChange={(e) => {
                    setPassword(e.target.value)
                    console.log(e.target.value)
                }} 
                />
            <br />
            {buttonClicked ? alert : ''}
            <MyButton style={{marginLeft: '10px', marginTop: '8px', background: '#4952d1', width: '300px', height: '50px'}} name="Log in" onClick={() => handleOnClick()} variant='contained' />
        </Card>
    </div>
}

export default LoginForm