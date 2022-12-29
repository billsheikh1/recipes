import React from 'react';
import './App.css';

const recipeName = 'Pizza';

function App() {
  return (
    <>
    <header className="header">
      Make Recipes!
    </header>
    <section className="recipe__container">
      <header className="recipe__header">
        {recipeName}
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
          
        </main>
      </section>
    </section>
   </>
  );
}

export default App;
