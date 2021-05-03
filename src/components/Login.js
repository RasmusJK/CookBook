import React, { useState} from 'react';
import { useLazyQuery} from '@apollo/client';
import {LOGIN} from "../gql/query";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import TopBar from "./TopBar";
const useStyles = makeStyles({
    root:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-around",
        textAlign:"left",
        marginTop:"10%"
    },
        container:{
            background: "#fafafa",
            width:"40vh",
            height:"30vh",
            boxShadow:"2px 2px 2px black",
            borderRadius:10,

            display:"inline-block",
            alignContent:"center"
        },

    form: {
        display:"flex",
        flexDirection: "column",

        marginLeft:"15%",
        marginRight:"15%",
        marginTop: "5%"


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
            window.location.reload();
        },onError(error){
            console.log("loginError",error)
        }

    });

    return (
        <div>
            <TopBar/>
        <div className={classes.root}>

        <div className={classes.container}>
            <form className={classes.form} onSubmit={event => {
                event.preventDefault();
               login()

            }}>
                <Typography style={{textAlign:"center"}}>Login</Typography>
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
        </div>
        </div>
    );
}
export default Login;
