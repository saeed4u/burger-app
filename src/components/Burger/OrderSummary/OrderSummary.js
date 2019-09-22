import React from 'react'
import Aux from '../../../hoc/Aux'

const OrderSummary = (props) => {
    const {ingredients} = props
    const summary = Object.keys(ingredients)
                        .map(ingKey => (<li key={ingKey}><span style={{textTransform: 'capitalize'}}>{ingKey}</span>:{ingredients[ingKey]}</li>));
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Burger ingredients</p>
            <ul>{summary}</ul>
            <p>Continue to checkout</p>
        </Aux>
    )
}
export default OrderSummary;