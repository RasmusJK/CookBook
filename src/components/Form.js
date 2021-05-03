import '../App.css';
import React, {useState} from "react";
import {Button, Container} from "@material-ui/core";
import {CREATE_RECIPE} from '../gql/mutations'
import {useMutation} from "@apollo/client";
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom'
import TopBar from "./TopBar";
const ingredients= [];

const useStyles = makeStyles({
    form: {
       alignItems:"center",
        display:"flex",
        flexDirection:"column",
        marginBottom:"10px",
        marginTop:"10px"
    },
    button: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",

    }
});

const Form= ()=> {
    const history= useHistory();
    const classes = useStyles();
    const [recipeName, setRecipeName] =useState("");

    const [ingredient, setIngredient] =useState("");
   // const [ingredients, setIngredients] =useState([]);

    const [step, setStep] =useState("");
    const [steps, setSteps] =useState([]);
    const [image, setImage] =useState(null);

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
    const handleFileChange = e =>{
        const file = e.target.files[0];
        if (!file) return
        setImage(file);
    }
    //toimii

    const [addRecipe]= useMutation(CREATE_RECIPE, {
        variables:{
            recipeName: recipeName,
            ingredients: ingredients,
            steps: steps,
            author: localStorage.getItem("Username"),
            file: image
        },onCompleted: ()=>{
            console.log("recipe added");
            history.push('/myRecipes')
            window.location.reload();
        }, onError(e){
            console.log(e);
        }
    });

  /*  const addIngredientsToDB = ()=> {
        addRecipe({
            variables:{
                recipeName: recipeName,
                ingredients: ingredients,
                steps: steps,
                author: localStorage.getItem("Username"),
                File: image
            }
        })
        if (error){
            console.log("error",error);
        }
    }
*/

console.log(recipeName);
    return (
        <div className="App">
            <TopBar/>
            <form className={classes.form}>
            <input type="text"
                placeholder="Recipe name"
                onChange={e=>{
                    setRecipeName(e.target.value);
            }}
            />
                <input type="file"
                       style={{marginTop:"10px",marginBottom:"10px"}}
                       accept="image/*"
                       onChange={handleFileChange}
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

                <Button className={classes.button} onClick={addRecipe}>Add Recipe</Button>
            </form>

        </div>
    );
}

export default Form;
