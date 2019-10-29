import React, {Component} from 'react'
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/Modal'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'

class BurgerBuilder extends Component{
    state = {
        purchasing: false
    }

    componentWillMount(){
        console.log(this.props.ingredients)
    }

    updatePurchaseState = () => {
        const ingredients = {...this.props.ingredients}
        const sum = Object.keys(ingredients)
                    .map(igKey => {
                        console.log(igKey);
                        return ingredients[igKey]
                    })
                    .reduce((sum,next) =>{
                        return sum + next;
                    }, 0);
        console.log(sum);
        return sum > 0
    }


    handlePurchaseHandler = () => this.setState({purchasing: true})

    handlePurchaseCancelHandler = () => this.setState({purchasing: false})

    purchaseContinue = () => {
        alert('You continue');
    }

    render(){
        const disabledInfo = {
            ...this.props.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed = {this.handlePurchaseCancelHandler}>
                    <OrderSummary price={this.props.totalPrice} pruchaseContinue={this.purchaseContinue} purchaseCancel={this.handlePurchaseCancelHandler} ingredients={this.props.ingredients} />
                </Modal>
                <Burger ingredients={this.props.ingredients}/>
                <BuildControls purchaseHandler = {this.handlePurchaseHandler} purchaseAble={this.updatePurchaseState()} totalPrice={this.props.totalPrice} 
                    ingredientAdded ={this.props.onIngredientAdded} ingredientRemoved={this.props.onIngredientRemoved} disabledInfo={disabledInfo}/>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}
const mapDispatchToProps =  dispatch => {
    return {
        onIngredientAdded: (ingredientName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName }),
        onIngredientRemoved: (ingredientName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);