import Aux from "../../hoc/Aux";
import Burger from "../../Components/Burger/Burger";
import { useState }  from "react";
import BuildControlls from "../../Components/BuildControls/BuildControlls";
import Modal from "../../Components/UI/Modal/Modal";
import Order from "../../Components/Burger/Order/Order";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { connect } from 'react-redux';
import * as service from '../../store/actions/index';
import { useEffect } from "react";


const BurgerBuilder = (props) => {

    useEffect(() => {
        if(!props.ings)
        props.onInit();
    }, [props]);


    const [purshasing , setPurshasing] = useState(false);

    const updatePurchasable = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map((key)=> {
                return ingredients[key]
            })
            .reduce((sum,el) => {
                return sum + el ;
            },0);
        return sum > 0;
    }

    const showOrder = () => {
        setPurshasing(true) ;
    }

    const hideOrder = () => {
        setPurshasing(false) ;
    }

    const confirmOrder = (user)=>{
        hideOrder();
        const order = {
            order : user,
            price : props.price,
            ingredients : {...props.ings}
        }
        props.onAddBurger(order);
    }

    const disabledInfo = {
        ...props.ings
    };
    for ( let key in disabledInfo ) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    let view = (
            <Spinner />
        )

    if(props.ings) {
        view = (
            <Aux>
            <Modal disabled={!purshasing} hide={() => hideOrder()} size="10%">
                <Order 
                    ingredients={props.ings}
                    price={props.price}
                    hide={() => hideOrder()}
                    confirm = {(data)=>confirmOrder(data)}
                    loading={props.loading}
                />
            </Modal>

            <Modal disabled={!props.loading} hide={props.loading} size="30%">
                <Spinner />
            </Modal>

            <Burger ingredients={props.ings} />
            <BuildControlls
                add={props.onIngredientAdded}
                remove={props.onIngredientRemoved}
                price={props.price}
                purchasable={updatePurchasable(props.ings)}
                order={() => showOrder()}
                disabledInfo={disabledInfo}
            />
            
        </Aux>
        )
    }



    
    return (
        <Aux>
            {view}
        </Aux>
    );
}

const mapStateToProps = state => {
    return {
        ings : state.burgerBuilder.ingredients,
        price : state.burgerBuilder.price,
        error : state.burgerBuilder.error,
        loading : state.order.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded : (ingName) => dispatch(service.addIngredient(ingName)),
        onIngredientRemoved : (ingName) => dispatch(service.removeIngredient(ingName)),
        onInit : () => dispatch(service.initIngredients()),
        onAddBurger : (order)=>dispatch(service.onPurchase(order))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder) ;