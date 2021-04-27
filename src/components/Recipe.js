import React,{useEffect,useState} from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import TopBar from "./TopBar";
import {GET_RECIPE} from '../gql/query'
import { useQuery } from '@apollo/client'

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
const Recipe = ({match}) => {
    console.log("match params",match.params.id);
    const id = match.params.id
    const classes = useStyles();

    const { loading, error, data } = useQuery(GET_RECIPE,{variables: {id: id }});
    const [recipe,setRecipe]= useState([]);

    useEffect(()=>{
        if (data) {
            console.log("single recipe", data.recipe);
            setRecipe(data.recipe);
        }
    },[data]);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return(
        <div>
            <TopBar/>
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image="http://placekitten.com/300/300"
                title="placeholder"
            />
            <CardContent>


                <Typography className={classes.title}  color="textSecondary" gutterBottom>
                    {recipe.recipeName}
                </Typography>

                <Typography className={classes.author} color="textSecondary">
                    Author
                </Typography>

            </CardContent>

        </Card>
        </div>
    )
}

export default Recipe;
