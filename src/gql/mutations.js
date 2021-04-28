import {gql} from '@apollo/client'

export const CREATE_INGREDIENT = gql`
 mutation{addIngredients(
  ingredients: ["Nuudelit","vesi"]
){ingredients id}}

`;

export const CREATE_RECIPE = gql`
 mutation{addRecipe(recipeName:"nuudelit"
  ingredients:"6088709bb0ded81f24b3e274"
  steps:["keitä vesi","kaada vesi nuudeleiden päälle", "odota 5min ","nauti"
  ]){recipeName ingredients{ingredients} steps }}

`;
