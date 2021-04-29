import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {CREATE_USER} from "../gql/mutations";
import { useHistory } from "react-router-dom";
const Register=()=>{

    const [username, setUsername] =useState("");
    const [password, setPassword] =useState("");

    const [register, { loading, data, error }] = useMutation(CREATE_USER);
    const history = useHistory();

       const signUp = ()=> {
           register({
               variables: {
                   username: username,
                   password: password
               }
            }).then(r =>{
                console.log("R?",r);
           })


       }

    return (
        <div className="App">
            <form onSubmit={event => {
                event.preventDefault();
                signUp();
                history.push('/');

            }}>
                <input type="text"
                       placeholder="Username"
                       onChange={(e)=>{
                           setUsername(e.target.value);
                       }}
                />
                <input type="text"
                       placeholder="Password"
                       onChange={(e)=>{
                           setPassword(e.target.value);
                       }}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
export default Register;
