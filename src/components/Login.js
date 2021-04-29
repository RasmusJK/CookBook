import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import {LOGIN} from "../gql/query";
import { useHistory } from "react-router-dom";

const Login=()=>{

    const [username, setUsername] =useState("");
    const [password, setPassword] =useState("");
    const history = useHistory();
    const [login, { loading, data, error }] = useLazyQuery(LOGIN);

    const signIn = ()=> {
        login({variables:{
            username:username,
            password:password
            }

        })
       // localStorage.setItem("Token",???)


    }

    return (
        <div className="App">
            <form onSubmit={event => {
                event.preventDefault();
                signIn();
                localStorage.setItem("Token",login.token)
                console.log(login.token);
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;
