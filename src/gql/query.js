import { gql } from '@apollo/client';


export const GET_RECIPES = gql`
  query{recipes{
  recipeName
  id
  steps
  ingredients{ ingredients}
}
}

`;

export const GET_RECIPE = gql`
 query recipe($id: ID!){
   recipe(id: $id ){
    recipeName
    id
    ingredients{ingredients} 
    steps
    }
    }

`;




