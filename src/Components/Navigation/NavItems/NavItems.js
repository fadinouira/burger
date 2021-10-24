import NavItem from "./NavItem/NavItem";
import "./NavItems.css" ;
import {NavLink} from "react-router-dom" ;
const NavItems = (props) => {
    let signIn = <NavItem ><NavLink className="a" to="/sign-in">Sign in</NavLink></NavItem>
    if(props.auth) {
        signIn = [
            <NavItem> <NavLink exact className="a" to="/">Orders</NavLink> </NavItem>,
            <NavItem ><NavLink className="a" to="/create">Create Burger</NavLink></NavItem>,
            <NavItem ><NavLink className="a" to="/logout">Sign out</NavLink></NavItem>,
        ]
    }
    return (
        <ul className="NavItems">
            {signIn}
        </ul>
    ) 
};



export default NavItems ;