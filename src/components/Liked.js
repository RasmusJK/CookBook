import '../App.css';
import {makeStyles} from "@material-ui/core/styles";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from "@material-ui/core/CardMedia";
import React from "react";



function Liked(props) {
    return (
        <div className="App">
            <p>{props.name}</p>

        </div>


    );
}

export default Liked;
