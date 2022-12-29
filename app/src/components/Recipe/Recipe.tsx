import { TRecipe } from '../../models/TRecipe';

function Recipe({name, ingredients, method, prepTime, cookTime}: TRecipe) {
    console.log(ingredients);
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

                </main>
            </section>
            <section className="recipe__method">
                <header className="recipe__method__header">
                Method
                </header>
                <main className="recipe__method__body">
                    {method}
                </main>
            </section>
        </section>
    )
}

export default Recipe;