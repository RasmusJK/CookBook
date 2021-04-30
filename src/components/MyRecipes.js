import '../App.css';
import React, {useEffect, useState} from "react";
import Form from "./Form"
import {useQuery} from "@apollo/client";
import {GET_USER_RECIPES} from "../gql/query";
const MyRecipes=({name})=> {

    const { loading, error, data } = useQuery(GET_USER_RECIPES,{variables:{
        author: localStorage.getItem("Username")}});
    const [recipes,setRecipes]= useState([]);

    useEffect(()=>{
        if (data) {
                console.log("data", data);
           // setRecipes(data.recipes);
        }
    },[data])
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div className="App">
            <Form/>



        </div>
    );
}

export default MyRecipes;
