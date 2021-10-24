import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";
import {useState} from "react";
import Input from "../../UI/Input/Input";

const Order = props => {
    const ingredients = Object.keys(props.ingredients).map((el) => {
        return <li key={el} >{el} : {props.ingredients[el]}</li>
    });

    const [form ,setForm ] =  useState({
        orderForm : {
            name : {
                type:"input" ,
                config:{
                    type:"text",
                    placeholder:"your name"
                },
                value : ""
            },

            street:{
                type:"input" ,
                config:{
                    type:"text",
                    placeholder:"Street"
                },
                value : ""
            },

            zipCode:{
                type:"input" ,
                config:{
                    type:"number",
                    placeholder:"Zip Code"
                },
                value : ""
            },

            email:{
                type:"input" ,
                config:{
                    type:"email",
                    placeholder:"Your Email"
                },
                value : ""
            },

            delivMethod:{
                type:"select" ,
                config : {
                    options:[{value : 'fastest', displayValue:"Fastest"},{value : 'cheepest', displayValue:"Cheepest"}],
                },
                value : "fastest"
            }
        }
    });

    const [data, setData] = useState(null);

    const inputChange = (event , input) => {
        const newForm = {...form.orderForm} ; 
        
        const newInput = {...newForm[input]}

        newInput.value = event.target.value ;
        newForm[input] = newInput ;

        setForm({orderForm : newForm});
        const data = {

            name : form.orderForm.name.value,
    
            street:form.orderForm.street.value,
    
            zipCode:form.orderForm.zipCode.value,
    
            email:form.orderForm.email.value,
    
            delivMethod:form.orderForm.delivMethod.value
    
        }
        setData(data);
    }

    const formArray = [];
    for (let key in form.orderForm) {
        formArray.push({
            id:key,
            config : form.orderForm[key] 
        })
    }

    let burgerForm = (
        <form>
            {
                formArray.map(el => {
                    return (
                        <Input 
                            key={el.id}
                            elementType={el.config.type}
                            elementConfig={el.config.config}
                            value={el.config.value}
                            changed={(event) => inputChange(event ,el.id)}
                        />
                    )
                })
            }
        </form>
    );

    const sendData = ()=> {
        props.confirm(data)
    }

    
    
    return (
        <Aux>
            <h3>Order</h3>
            <p>A delicious MiMi's burger with the following ingredients</p>
            <ul>
                {ingredients}
            </ul>
            {burgerForm}
            <p>Continue to Checkout ?</p>
            <Button click={props.hide} class={"Danger"} >CANCEL</Button>
            <Button click={sendData} class={"Success"}>ACCEPT</Button>
        </Aux>
       
    )
}

export default Order ;
