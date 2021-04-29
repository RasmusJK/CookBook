import { gql } from '@apollo/client';


export const GET_RECIPES = gql`
  query{recipes{
  recipeName
  id
  steps
  ingredients
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
    username
    token 
    id
 }
 }
 
`;




