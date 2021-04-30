import '../App.css';
import React, {useState} from "react";
import {Button} from "@material-ui/core";
import {CREATE_RECIPE} from '../gql/mutations'
import {useMutation} from "@apollo/client";

const ingredients= [];
const Form= ()=> {
    const [recipeName, setRecipeName] =useState("");

    const [ingredient, setIngredient] =useState("");
   // const [ingredients, setIngredients] =useState([]);

    const [step, setStep] =useState("");
    const [steps, setSteps] =useState([]);

    const updateStep =e =>{
        setStep(e.target.value);
    }
    const updateIngredient =e =>{
        setIngredient(e.target.value);
    }

    const addIngredientToList  = () =>{
       console.log("ingredient",ingredient);
        ingredients.push(ingredient)

       //setIngredients(ingredients2);
          console.log("ingredients",ingredients,);
    setIngredient("");
    }
    const addStepsToList =() =>{
        setSteps( [...steps, step]);
        console.log(steps);
        setStep("");

    }
    //toimii

    const [addRecipe,{error}]= useMutation(CREATE_RECIPE)
    const addIngredientsToDB = ()=> {
        addRecipe({
            variables:{
                recipeName: recipeName,
                ingredients: ingredients,
                steps: steps,
                author: localStorage.getItem("Username")
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
                onChange={e=>{
                    setRecipeName(e.target.value);
            }}
            />

            <form onSubmit={event=>{
                event.preventDefault()
                addIngredientToList()

            }}>
            <input type="text"
                    placeholder="add ingredients"
                   value={ingredient}
                    onChange={updateIngredient}
            />
                <Button type="submit">Add ingredient</Button>
            </form>
            <form>
                <input type="text"
                       placeholder="add steps"
                       value={step}
                       onChange={updateStep}
                />
                <Button onClick={addStepsToList}>Add Step</Button>
            </form>
                <Button onClick={addIngredientsToDB}>Add Recipe</Button>


        </div>
    );
}

export default Form;
