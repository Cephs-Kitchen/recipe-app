import React from 'react';
import style from './recipe.module.css';

const Recipes = ({title, ingredients, image}) => {
    return(
        <div className={style.recipes}>
            <h1>{title}</h1>
            <ol>{ingredients.map(ingredients => (
                <li>{ingredients.text}</li>
                ))}
                </ol>
            <img className={style.image} src={image} alt=''/>

        </div>
    );
};

export default Recipes;