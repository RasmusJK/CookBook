import '../App.css';
import React, {useState} from "react";
import {Button, Container} from "@material-ui/core";
import {CREATE_RECIPE} from '../gql/mutations'
import {useMutation} from "@apollo/client";
import { makeStyles } from '@material-ui/core/styles';

const ingredients= [];

const useStyles = makeStyles({
    form: {
       alignItems:"center",
        display:"flex",
        flexDirection:"column",
        marginBottom:"10px"

    },
    button: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",

    }
});

const Form= ()=> {
    const classes = useStyles();
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

            <form className={classes.form}>
            <input type="text"
                placeholder="Recipe name"
                onChange={e=>{
                    setRecipeName(e.target.value);
            }}
            />
            <Container>
            <input type="text"
                    placeholder="add ingredients"
                   value={ingredient}
                    onChange={updateIngredient}
            />
                <Button className={classes.button} onClick={addIngredientToList}>+</Button>
            </Container>
                <Container>
                <input type="text"
                       placeholder="add steps"
                       value={step}
                       onChange={updateStep}
                />
                <Button className={classes.button} onClick={addStepsToList}>+</Button>
                </Container>

                <Button className={classes.button} onClick={addIngredientsToDB}>Add Recipe</Button>
            </form>

        </div>
    );
}

export default Form;
