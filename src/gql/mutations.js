import {gql} from '@apollo/client'

export const CREATE_RECIPE = gql`
 
 mutation addRecipe(
    $recipeName: String
    $ingredients: [String]
    $steps: [String]
    $author: String
    ) {addRecipe(
        recipeName: $recipeName
        ingredients: $ingredients
        steps: $steps
        author: $author
    ) {
        recipeName
        ingredients
        steps
        author
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


