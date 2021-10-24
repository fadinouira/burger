import BuildControl from "./BuildControl/BuildControl";
import "./BuildControlls.css" ;

const controls = [
    { label : 'Salad' , type : 'salad'},
    { label : 'Bacon' , type : 'bacon'},
    { label : 'Cheese' , type : 'cheese'},
    { label : 'Meat' , type : 'meat'}
]

const BuildControlls = props => {
     const list = controls.map(el => {
         return <BuildControl disabledInfo={props.disabledInfo[el.type]} label={el.label} key={el.type} remove={()=>props.remove(el.type)} add={()=>props.add(el.type)} />
     });

    return (
        <div className="BuildControlls">
            <h5>total price is : {props.price}</h5>
            {list}
            <button onClick={props.order} disabled={!props.purchasable} className="OrderButton">ORDER NOW</button>
        </div>
    );
}

export default BuildControlls ;