import React,{useEffect,useState} from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import TopBar from "./TopBar";
import {GET_RECIPE} from '../gql/query'
import { useQuery } from '@apollo/client'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
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
    },
    ingredients:{
        marginTop:30
    },
    button:{
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
    }
});
const Recipe = ({match}) => {
    console.log("match params",match.params.id);
    const id = match.params.id
    const classes = useStyles();
    const { loading, error, data } = useQuery(GET_RECIPE,{variables: {id: id }});

    const [recipe,setRecipe]= useState([]);
    const [resource,setResource] = useState(true)
    const [ingredients, setIngredients] = useState([])
    const [steps, setSteps] = useState([]);
    const [instructions, setInstructions] = useState([ingredients])

    useEffect(()=>{
        if (data) {
            console.log("single recipe", data.recipe);
            setRecipe(data.recipe);
            setIngredients(data.recipe.ingredients);
            setSteps(data.recipe.steps);

            if(resource){
                 setInstructions(ingredients);
            } else{
                setInstructions(steps);
            }
        }
    },[data,resource,ingredients,steps]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return(
        <div>
            <TopBar/>
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={recipe.file}
                title="placeholder"
            />
            <CardContent>


                <Typography className={classes.title}   gutterBottom>
                    {recipe.recipeName}
                </Typography>

                <Typography className={classes.author} color="textSecondary">
                    {recipe.author}
                </Typography>
                <div className={classes.ingredients}>
                    <ButtonGroup className={classes.button} disableElevation variant="contained">
                        <Button onClick={()=>setResource(true)}>Ingredients</Button>
                        <Button onClick={()=>setResource(false)}>Steps</Button>
                    </ButtonGroup>

                     {instructions.map(val =>(
                   <Typography key={val}>{val}</Typography>))}

                </div>

            </CardContent>

        </Card>
        </div>
    )
}

export default Recipe;
