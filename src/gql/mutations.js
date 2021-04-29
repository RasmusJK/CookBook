import {gql} from '@apollo/client'

/*export const CREATE_INGREDIENT = gql`

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
`;*/

export const CREATE_RECIPE = gql`
 
 mutation addRecipe(
    $recipeName: String
    $ingredients: [String]
    $steps: [String]
    ) {addRecipe(
        recipeName: $recipeName
        ingredients: $ingredients
        steps: $steps
    ) {
        recipeName
        ingredients
        steps
    }
 }
 
`;

export const CREATE_USER = gql`
 
 mutation register(
    $username: String!
    $password: String!
  ) {
    register(
      username: $username
      password: $password
    ) {
      username
      id
    }
  }

 
`;


