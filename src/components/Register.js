import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {CREATE_USER} from "../gql/mutations";
import { useHistory } from "react-router-dom";
const Register=()=>{

    const [username, setUsername] =useState("");
    const [password, setPassword] =useState("");
    const history = useHistory();

    const [register] = useMutation(CREATE_USER,{
        variables:{
            username: username,
            password: password
        },onCompleted: ({register}) => {
            console.log("register",register);
            history.push('/');

        },onError(error){
            console.log("registerError",error)

        }
    });



    return (
        <div className="App">
            <form onSubmit={event => {
                event.preventDefault();
                register();

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
