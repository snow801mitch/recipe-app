import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, image, ingredients}) => {
    return(
        <div>
            <h1 className={style.recipe}>{title}</h1>
            <ul className="ingredient-list">
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img src={image} alt=""/>
        </div>
    );
};

export default Recipe;