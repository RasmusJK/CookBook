import '../App.css';
import React from "react";
import Login from "./Login";
import Typography from "@material-ui/core/Typography";
import Register from "./Register";
const Liked=(props)=> {
    return (
        <div className="App">
        <Typography>Login</Typography>
            <Login></Login>
            <Typography>Register</Typography>
            <Register/>
        </div>
    );
}

export default Liked;
