import React, { useState} from 'react';
import { useLazyQuery} from '@apollo/client';
import {LOGIN} from "../gql/query";
import { useHistory } from "react-router-dom";

const Login=()=>{

    const [username, setUsername] =useState("");
    const [password, setPassword] =useState("");
    const history = useHistory();
    const [login] = useLazyQuery(LOGIN,{
        variables:{
            username:username,
            password:password
        },
        onCompleted:({login}) =>{
            localStorage.setItem("Token",login.token);
            localStorage.setItem("Username",login.username);
            console.log(login);
            history.push('/');
        },onError(error){
            console.log("loginError",error)
        }

    });

    return (
        <div className="App">
            <form onSubmit={event => {
                event.preventDefault();
               login()

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
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;
