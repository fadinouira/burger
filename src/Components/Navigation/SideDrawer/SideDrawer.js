import Logo from "../Logo/Logo" ;
import NavigationItems from "../NavItems/NavItems" ;
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux"
const SideDrawer = props => {
    
    let style = "SideDrawer Open"
    if(props.closed) {
        style = "SideDrawer Open"
    }
    else {
        style = "SideDrawer Close"
    }
    
    return (
        // eslint-disable-next-line no-restricted-globals
        <Aux>
            <Backdrop show={props.closed && !props.mobile} hide={props.clicked} />
            <div className={style} hidden={props.mobile} onClick={props.clicked}>
                <Logo height="100px"/>
                <nav>
                    <NavigationItems auth={props.auth} />
                </nav>
            </div>
        </Aux>
        
    );
}

export default SideDrawer ;