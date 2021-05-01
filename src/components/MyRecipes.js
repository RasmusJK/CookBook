import '../App.css';
import React, {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_USER_RECIPES} from "../gql/query";
import MyRecipeCard from "./MyRecipeCard";
import { makeStyles } from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {

        alignContent:"center",

        },
        gallery:{
            background:"#fafafa",
            width:"53vh",
            height:"70vh",
            marginTop:10,
            marginLeft:10,
            borderRadius:10,
            boxShadow:"2px 2px 2px black",

            display:"flex",

            flexDirection:"row",
            flexWrap: "wrap",
            alignContent:"flex-start",
            alignSelf:"center",

            overflowY: "scroll",

        },
    button: {
        marginTop:20,
        background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
    }
}));
//Looks like shit, ccs is hard

//napista uploadformiin

const MyRecipes=({name})=> {
    const classes = useStyles();
    const history = useHistory();

    const { loading, error, data } = useQuery(GET_USER_RECIPES,{variables:{
        author: localStorage.getItem("Username")}});
    const [recipes,setRecipes]= useState([]);
    useEffect(()=>{
        if (data) {
                console.log("Recipes by user", data.recipesByUser);
            setRecipes(data.recipesByUser);
        }
    },[data])
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
            <div className={classes.root}>
            <div className={classes.gallery}>
                {recipes.map(recipe =>(
                    <MyRecipeCard key={recipe.id} id={recipe.id} title={recipe.recipeName} />
                ))}

            </div>
                <Button className={classes.button} onClick={()=>{
                history.push('/addRecipe');}
                }>Add new recipe</Button>
            </div>



    );
}

export default MyRecipes;
