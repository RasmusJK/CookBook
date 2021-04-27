import '../App.css';
import React,{useEffect,useState} from "react";

import Card1 from "./Card";
import {GET_RECIPES} from '../gql/query'
import { useQuery } from '@apollo/client'

const Home=({name})=> {
    const { loading, error, data } = useQuery(GET_RECIPES);
    const [recipes,setRecipes]= useState([]);

    useEffect(()=>{
        if (data) {
            console.log("data", data.recipes);
            setRecipes(data.recipes);
        }
    },[data])


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    //const recipex =["chiken","pasta","taco"]
    return (

        <div className="App">
            {recipes.map(recipe =>(
                <Card1 key={recipe.id} id={recipe.id} title={recipe.recipeName} />
            ))}
        </div>
    );
}

export default Home;
