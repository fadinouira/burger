import Aux from "../../hoc/Aux";
import Ingredient from "./Ingredient/Ingredient";
import './Burger.css';

const Burger = (props) => {
    let add = "" ;

    add = "Please add your ingredients MiMi" ;

    const ingredients = Object.keys(props.ingredients).map(key => {
        return [...Array(props.ingredients[key])].map((_,i) => {
            add = "" ;
            return <Ingredient key={key + i} type={key}/>
        })
    });


    return (
        <Aux >
            <div className="burger">
                <Ingredient type="bread-top"/>
                {ingredients}
                {add}
                <Ingredient type='bread-bottom'/>
            </div>
        </Aux>
    );

}

export default Burger ;