import React from 'react';

const Recipe = ({title, image, ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
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