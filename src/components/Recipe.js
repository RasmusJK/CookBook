import React from "react";
//import TopBar from "./TopBar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        margin:10,
        height: "82vh"

    },

    media: {
        height: 140,
    },
    title:{
        textAlign:"start"
    },
    author:{
        textAlign:"start"
    },
    content: {
        textAlign:"start"
    }
});
const Recipe = ({title}) => {
    console.log(title);
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image="http://placekitten.com/300/300"
                title="placeholder"
            />
            <CardContent>


                <Typography className={classes.title}  color="textSecondary" gutterBottom>
                    {title}
                </Typography>

                <Typography className={classes.author} color="textSecondary">
                    Author
                </Typography>

            </CardContent>

        </Card>

    )
}

export default Recipe;
