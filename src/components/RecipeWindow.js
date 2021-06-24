import React from 'react';
import './RecipeWindow.css';
import { v4 as uuidv4 } from 'uuid';

const RecipeWindow = ({recipes}) => {
    return (
        <div className = "recipe-window">
            {recipes.map(recipe => (
                <div className = 'recipe' key = {`${recipe.recipe.label}--${uuidv4()}`}>
                    <img className = "image" src = {recipe.recipe.image} alt = "{recipe.recipe.label}" />
                    <h2>{recipe.recipe.label}</h2>
                </div>
            ))}
        </div>
    );
};

export default RecipeWindow
