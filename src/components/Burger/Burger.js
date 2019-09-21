import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import PropTyps from 'prop-types';

import classes from './Burger.css'

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,index) => <BurgerIngredient key={igKey + index} type={igKey} />)
        })
        .reduce((prev, current) => {
            return prev.concat(current);
        },[])

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please add an ingredient</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

Burger.propTypes = {
    ingredients: PropTyps.object.isRequired
};

export default Burger;