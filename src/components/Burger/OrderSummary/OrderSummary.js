import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const {ingredients} = props
    const summary = Object.keys(ingredients)
                        .map(ingKey => (<li key={ingKey}><span style={{textTransform: 'capitalize'}}>{ingKey}</span>:{ingredients[ingKey]}</li>));
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Burger ingredients</p>
            <ul>{summary}</ul>
            <p>Total price: <strong>{props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType='Success' clicked={props.pruchaseContinue}>CONTINUE</Button>
            <Button btnType='Danger' clicked={props.purchaseCancel}>CANCEL</Button>
        </Aux>
    )
}
export default OrderSummary;