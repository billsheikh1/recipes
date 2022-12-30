import { TRecipe } from '../../models/TRecipe';
import './Recipe.css';

function Recipe({name, ingredients, method, prepTime, cookTime}: TRecipe) {
    return (
        <section className="recipe__container">
            <header className="recipe__header">
                {name}
            </header>
            <section className="recipe__ingredients">
                <header className="recipe__ingredients__header">
                Ingredients
                </header>
                <main className="recipe__ingredients__body">
                    <ol>
                        {
                            ingredients.map((ingredient, i) => 
                                <li key={i}>{`${ingredient.name}, ${ingredient.measurementAmount} ${ingredient.measurementUnit}`}</li>
                            )
                        }
                    </ol>
                </main>
            </section>
            <section className="recipe__method">
                <header className="recipe__method__header">
                Method
                </header>
                <main className="recipe__method__body">
                    <ol>
                        {
                            method.map((item, i) => <li key={i}>{item.details}</li>)
                        }
                    </ol>
                </main>
            </section>
        </section>
    )
}

export default Recipe;