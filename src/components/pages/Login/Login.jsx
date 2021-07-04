import React, { useState } from 'react';
import { Form, Input, Label, FormGroup, Button } from 'reactstrap';
import axios from "axios";
import decode from "jwt-decode";


const Login = () => {

    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');

    const handleChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(userName,password);

        const LoginData = {
            position:userName,
            password:password
        }

        await axios.post('https://icaf2022-backend.herokuapp.com/admin/login',LoginData)
            .then(response => {
                if (response.data.success) {
                    sessionStorage.setItem("token",response.data.token)

                } else {
                    alert(response.data.message)
                }
            })
            .catch(err => console.log(err));

        if(sessionStorage.token) {
            const user = decode(sessionStorage.token).position;

            if(user === 'Admin'){
                window.location = "https://elegant-mestorf-3970d4.netlify.app/admin/attendees"
            }else if(user === 'Reviewer'){
                window.location = "https://elegant-mestorf-3970d4.netlify.app/reviewer/researchPaper"
            }if(user === 'Editor'){
                window.location = "https://elegant-mestorf-3970d4.netlify.app/editor/getConferenceTracks"
            }
        }
    }

    return (

        <div>
            <p> </p>

             <div className="container">
            <Form onSubmit={handleSubmit}>

                <FormGroup>
                    <Label for="uname" style={{color:'black'}}> <b>User Name </b></Label>
                    <Input id="Uname"  name="email" placeholder="Enter Your User Name" onChange={handleChangeUserName} />
                </FormGroup>
                <p> </p>

                <FormGroup>
                    <Label for="pass" style={{color:'black'}}><b> Password </b></Label>
                    <Input id="password" type='password' name="password" placeholder="Enter Your Password" onChange={handleChangePassword} />
                </FormGroup>

                <p> </p>

                <Button type="submit" color="primary">Login</Button>
                <p> </p>

            </Form>
             </div>
            <p> </p>

        </div>

    );

}

export default Login;