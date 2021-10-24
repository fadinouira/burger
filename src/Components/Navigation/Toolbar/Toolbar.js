import './Toolbar.css' ;
import Logo from '../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div>MENU</div>
            <Logo height="60%" />
            <nav>
                <NavItems auth={props.auth}></NavItems>
            </nav>
        </header>
    )
    
}

export default Toolbar ;