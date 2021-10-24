import "./NavItem.css" ;

const NavItem = (props) => {
    return (
        <li className="NavItem"  >
            {props.children}
        </li>
    )
}

export default NavItem ;