import { useState } from "react"
import MyButton from "../MyButton/MyButton"
import MyTextField from "../MyTextField/MyTextField"
import background from "./login-bg.jpg";
import './LoginForm.css'
import { styled } from "@mui/system";
import MyPasswordField from "../MyTextField/MyPasswordField"
import { validEmail, validPassword } from "../Regex/Regex"
import { Alert, Card, TextField} from "@mui/material"

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
            <h1>Rick & Morty</h1>
            <h5>A Collection of Rick & Morty characters, locations & episodes</h5>
            <MyTextField 
                id="outlined-basic"
                label="Email Address" 
                placeholder={"Eg. john@doe.com"} 
                value={email} 
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
                onChange={(e) => {
                    setPassword(e.target.value)
                    console.log(e.target.value)
                }} 
                />
                
            <br />
            {buttonClicked ? alert : ''}
            <MyButton name="Log in" onClick={() => handleOnClick()} />
        </Card>
    </div>
}

export default LoginForm