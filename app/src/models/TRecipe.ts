import { TIngredient } from './TIngreident';
import { TMethod } from './TMethod';

export type TRecipe = {
    name: string;
    ingredients: [TIngredient];
    method: [TMethod];
    cookTime: number;
    prepTime: number;
}

