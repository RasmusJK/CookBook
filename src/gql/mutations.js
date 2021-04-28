import {gql} from '@apollo/client'

export const CREATE_INGREDIENT = gql`
 
 mutation addIngredients(
    $ingredients: [String]
 ) { 
        addIngredients(
        ingredients: $ingredients
 ) {
    ingredients
     id
    }
  }
`;

export const CREATE_RECIPE = gql`
 
 mutation addRecipe(
    $recipeName: String
    $ingredients: ingredients
    $steps: [String]
    ) {addRecipe(
        recipeName: $recipeName
        ingredients: $ingredients
        steps: $steps
    ) {
        recipeName
        ingredients{ingredients} 
        steps
    }
 }
 
`;

