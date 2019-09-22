import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classses from './BuildControls.css'

const controls = [
    {label:'Salad', type: 'salad'},
    {label:'Bacon', type: 'bacon'},
    {label:'Cheese', type: 'cheese'},
    {label:'Meat', type: 'meat'}
]

const BuildControls = (props) => 
        <div className={classses.BuildControls}>
            <p>Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            {controls.map(control=>(
                <BuildControl  key={control.label} label={control.label} added={ () => props.ingredientAdded(control.type)} 
                removed ={() => props.ingredientRemoved(control.type)} disabled={props.disabledInfo[control.type]}/>
            )
            )}
            <button onClick={props.purchaseHandler} disabled={!props.purchaseAble} className={classses.OrderButton}>ORDER NOW</button>
        </div>


export default BuildControls;