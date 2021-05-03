import '../App.css';
import React,{useEffect,useState} from "react";

import Card1 from "./Card";
import {GET_RECIPES} from '../gql/query'
import { useQuery } from '@apollo/client'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display:"flex",
        justifyContent:"space-around",
        flexDirection:"column",
        marginBottom:50,

    },

});
const Home=({name})=> {
    const classes = useStyles();
    const { loading, error, data } = useQuery(GET_RECIPES);
    const [recipes,setRecipes]= useState([]);

    useEffect(()=>{
        if (data) {
        //    console.log("data", data.recipes);
            setRecipes(data.recipes);
        }
    },[data])


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (

        <div className={classes.root}>
            <div>
            {recipes.map(recipe =>(
                <Card1 key={recipe.id} id={recipe.id} title={recipe.recipeName} image={recipe.file} />
            ))}
            </div>
        </div>
    );
}

export default Home;
