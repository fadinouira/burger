import { useEffect} from "react";
import Burger from "../../Components/Burger/Burger";
import "./BurgerList.css";
import * as service from '../../store/actions';
import {connect} from 'react-redux';
import Spinner from "../../Components/UI/Spinner/Spinner";


const BurgerList = (props)=> {
    useEffect(
        ()=> {
            if(props.token)
            props.getOrders(props.token);
        },
        [props.token]
    );
    let list = <Spinner />;

    if(props.orders) {
        let i = 0 ;
        list = props.orders.map((b)=> {
            i = i+1 ;
            const order = {...b.order}
            console.log(b);
            return (
                <div className="Card" key={i}>
                    <div>{order.name}</div>
                    <div>{order.street}, {order.zipCode}</div>
                    <div>email: {order.email}</div>
                    <br />
                    <Burger ingredients={b.ingredients} />
                    <div className="Price">Price DT</div>
                    <div>{b.price} DT</div>
                </div>
                
            )
        });
    }

    return ( 
        <div>
            {list}
        </div>
    );
}

const getPropsState = (state) => {
    return {
        orders : state.order.orders,
        token : state.auth.token
    }
}

const dispatchPropsState = (dispatch) => {
    return {
        getOrders : (token)=> dispatch(service.onGetOrders(token))
    }
}

export default connect(getPropsState,dispatchPropsState) (BurgerList) ;