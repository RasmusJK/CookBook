import { gql } from '@apollo/client';


export const GET_RECIPES = gql`
  query{recipes{
  recipeName
  steps
  ingredients{ ingredients}
}
}

`;




