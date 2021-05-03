import { gql } from '@apollo/client';


export const GET_RECIPES = gql`
  query{recipes{
  recipeName
  id
  steps
  ingredients
  author
  file
}
}

`;

export const GET_RECIPE = gql`
 query recipe($id: ID!){
   recipe(id: $id ){
    recipeName
    id
    ingredients
    steps
    author
    file
    }
    }

`;
export const GET_USER_RECIPES = gql`
 query recipesByUser($author: String!){
   recipesByUser(author: $author){
    recipeName
    id
    ingredients
    steps
    author
    file
    }
    }

`;

export const LOGIN = gql`
 query login(
    $username: String!
    $password: String!){
    login(
    username: $username
    password: $password
    ){
    id
    username
    token 
    
 }
 }
 
`;




