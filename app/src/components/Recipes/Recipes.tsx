import { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';
import { TRecipe } from '../../models/TRecipe'

function Recipes() {

    const [recipes, setRecipes] = useState<TRecipe[]>([]);

    useEffect(() => {
    fetch('http://localhost:8080')
        .then(res => res.json())
        .then(data => setRecipes(data.recipes));
    }, []);

    return (
        <section className="recipes-container">
            {
                recipes.map((recipe, i) => <Recipe name={recipe.name}
                                                   ingredients={recipe.ingredients}
                                                   method={recipe.method}
                                                   prepTime={recipe.prepTime}
                                                   cookTime={recipe.cookTime}
                                                   key={i} />)
            }
        </section>
    )
}

export default Recipes;