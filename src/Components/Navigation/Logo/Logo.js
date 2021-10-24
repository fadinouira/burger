import logo from "../../../assets/images/logo.png"
import "./Logo.css"
const Logo = (props) => (
    <div className="Logo" style={{height : props.height}}>
        <img src={logo} alt="logo"/>
    </div>
) ;

export default Logo ;