import '../App.css';
import React, {useState} from "react";
import {Button} from "@material-ui/core";
import {CREATE_RECIPE} from '../gql/mutations'
import {useMutation} from "@apollo/client";

//pitää painaa add ingredient buttonia 2 kertaa ennen kuin lisää
const Form=()=> {
    const [recipeName, setRecipeName] =useState("");

    const [ingredient, setIngredient] =useState("");
    const [ingredients, setIngredients] =useState([]);
    const [step, setStep] =useState("");
    const [steps, setSteps] =useState([]);

    const addIngredientToList =e =>{
       e.preventDefault();
        setIngredients(prevState => [...prevState, ingredient]);
        console.log(ingredients);


    }
    const addStepsToList =e =>{
        e.preventDefault();
        setSteps(prevState => [...prevState, step]);
        console.log(steps);
    }


    const [addRecipe,{error}]= useMutation(CREATE_RECIPE)
    const addIngredientsToDB = ()=> {
        addRecipe({
            variables:{
                recipeName: recipeName,
                ingredients: ingredients,
                steps: steps
            }
        })
        if (error){
            console.log("error",error);
        }
    }


console.log(recipeName);
    return (
        <div className="App">

            <input type="text"
                placeholder="Recipe name"
                onChange={(e)=>{
                    setRecipeName(e.target.value);
            }}
            />
            <form onSubmit={addIngredientToList}>
            <input type="text"
                    placeholder="add ingredients"
                    onChange={(e)=>{
                        setIngredient(e.target.value);

                   }}
            />
                <Button type="submit">Add ingredient</Button>
            </form>
            <form onSubmit={addStepsToList}>
                <input type="text"
                       placeholder="add steps"
                       onChange={(e)=>{
                           setStep(e.target.value);
                       }}
                />
                <Button type="submit">Add Step</Button>
            </form>
                <Button onClick={addIngredientsToDB}>Add Recipe</Button>


        </div>
    );
}

export default Form;
