import {useState} from 'react' ;
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import './Auth.css';
import Aux from '../../hoc/Aux';
import * as service from '../../store/actions' ;
import { connect } from 'react-redux';
import Spinner from '../../Components/UI/Spinner/Spinner';
import { Redirect } from 'react-router';

const Auth = (props)=> {

    const [sign, setSign] = useState("Sign In")

    const [controls, setControls] = useState({
    
        email:{
            type:"input" ,
            config:{
                type:"email",
                placeholder:"Your Email"
            },
            value : "",
            validation : {
                required : true ,
                isEmail : true
            },
            valid : false
        },

        password : {
            type:"input" ,
            config:{
                type:"password",
                placeholder:"password"
            },
            value : "",
            validation : {
                required : true ,
                minLength : 6
            },
            valid : false
        },
    });

    const checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }


    const formArray = [];
    for (let key in controls) {
        formArray.push({
            id:key,
            config : controls[key] 
        })
    }

    const onSwitch = () => {
        switch(sign) {
            case "Sign In" :
                return setSign("Sign Up");
            case "Sign Up" :
                return setSign("Sign In");
            default:
                return null
        }
    }

    const inputChange = (event , input) => {
        const newForm = {...controls} ; 
        
        const newInput = {...newForm[input]}

        newInput.value = event.target.value ;
        newInput.valid = checkValidity(event.target.value,newForm[input].validation) ;
        newForm[input] = newInput ;

        setControls(newForm);
        checkValidity(event.target.value,newForm[input].validation)
    }

    let form = <Spinner />
    console.log("rendering")
    if(!props.loading)
    form = (
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

    const onSignIn = () => {
        const email = controls.email.value ;
        const pass = controls.password.value;
        props.signIn(email,pass,sign);
    }

    return(
        <Aux>
            <div className="Auth">
                {form}
                <Button class="Success" click={onSignIn}>{sign}</Button>
                <br />
                <Button class="Danger" click={onSwitch}>Sign Up/Sign In</Button>
                {props.token ? <Redirect to="/create" /> : null}
            </div>
        </Aux>
    )
}

const stateToProps = (state) => {
    return {
        loading : state.order.loading,
        token : state.auth.token
    }
}

const dispatchToProps = (dispatch) => {
    return {
        signIn :(email,pass,sign)=> {dispatch(service.auth(email,pass,sign))}
    }
}

export default connect (stateToProps,dispatchToProps)(Auth) ;