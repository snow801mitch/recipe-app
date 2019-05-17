import React from 'react';

const Recipe = ({title, calories, image}) => {
    return(
        <section>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt=""/>
        </section>
    );
};

export default Recipe;