import "./Button.css"
const Button = (props) => {
    const style = "Button " + props.class ;
    return (
        <button 
        onClick={props.click}
        className={style}
    >{props.children}</button>
    )
    
}

export default Button ;