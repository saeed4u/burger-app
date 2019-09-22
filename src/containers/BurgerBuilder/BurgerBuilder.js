import React, {Component} from 'react'
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/Modal'

const INGREDIENT_PRICES = {
    salad: 4,
    cheese: 3,
    bacon: 2,
    meat: 5
}

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseAble: false,
        purchasing: false
    }

    updatePurchaseState = () => {
        const ingredients = {...this.state.ingredients}
        const sum = Object.keys(ingredients)
                    .map(igKey => {
                        console.log(igKey);
                        return ingredients[igKey]
                    })
                    .reduce((sum,next) =>{
                        return sum + next;
                    }, 0);
        console.log(sum);
        this.setState({purchaseAble: sum > 0})
    }

    addIngredientHandler = (type) =>{
        const updatedCount = this.state.ingredients[type] + 1;
        console.log(updatedCount);
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount;
        console.log(updatedIngredient);
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredient}, ()=>{
            this.updatePurchaseState();
        });
    }

    removeIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] - 1;
        if(updatedCount < 0){
            return;
        }
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount;
        const priceToSubtract = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceToSubtract;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredient}, ()=>{
            this.updatePurchaseState();
        });
    }

    handlePurchaseHandler = () => this.setState({purchasing: true})

    handlePurchaseCancelHandler = () => this.setState({purchasing: false})

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed = {this.handlePurchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls purchaseHandler = {this.handlePurchaseHandler} purchaseAble={this.state.purchaseAble} totalPrice={this.state.totalPrice} ingredientAdded ={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} disabledInfo={disabledInfo}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;