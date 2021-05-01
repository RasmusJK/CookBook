import React, { useState} from 'react';
import { useLazyQuery} from '@apollo/client';
import {LOGIN} from "../gql/query";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {Container, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    root:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-around",
        textAlign:"left"
    },
    form: {
        display:"flex",
        flexDirection: "column",
        maxWidth:"30vh",


    },
    input:{
        marginBottom: "10px",
        marginTop:"10px"
    }
});

const Login=()=>{
    const classes = useStyles();
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
        <div className={classes.root}>

            <form className={classes.form} onSubmit={event => {
                event.preventDefault();
               login()

            }}>
                <input type="text"
                       placeholder="Username"
                       className={classes.input}
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
                <button style={{marginTop:"10px"}} type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;
