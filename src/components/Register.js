import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {CREATE_USER} from "../gql/mutations";
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
        display:"inline-block",
        alignContent:"center",
        borderRadius:10,
        boxShadow:"2px 2px 2px black",
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
const Register=()=>{
    const classes = useStyles();

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
        <div>
            <TopBar name="Register"/>
        <div className={classes.root}>
        <div className={classes.container}>
            <form className={classes.form} onSubmit={event => {
                event.preventDefault();
                register();
                history.push('/login');
                window.location.reload();

            }}>
                <Typography style={{textAlign: "center"}}>Register</Typography>
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
                <button style={{marginTop:"10px"}} type="submit">Register</button>
            </form>
        </div>
        </div>
        </div>
    );
}
export default Register;
