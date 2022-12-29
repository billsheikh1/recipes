import { Ingredient } from './Ingreident';

export type TRecipe = {
    name: string;
    ingredients: [Ingredient];
    method: string;
    cookTime: number;
    prepTime: number;
}

