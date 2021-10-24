import Aux from "../../hoc/Aux";
import "./Layout.css"
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";
import React , {useState , useEffect} from "react";
import "./Layout.css";
import Logo from "../../Components/Navigation/Logo/Logo";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const Layout = props => {
    const [show , setShow] =  useState(false) ;
    const [mobile, setMobile]  = useState(!window.matchMedia("(max-width: 500px)").matches) ;

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 500)
                setMobile(false);
            else
                setMobile(true);   
        }
    
        window.addEventListener('resize', handleResize)
    });

    const onShow = ()=> {
        const newShow = !show ;
        setShow(newShow);
    }

    return (
        <Aux>
            <button className="Toggle" onClick={onShow} hidden={mobile}>&#9776;</button>
            <div className="Logo-Home" hidden={mobile}><Logo height="30px"/></div>
            {props.token? null : <Redirect to ="/sign-in" />}
            <Toolbar auth={props.token != null}/>
            <SideDrawer auth={props.token != null} mobile={mobile} closed={show} clicked={()=>onShow()} />
            <main className="content">{props.children}</main>
        </Aux>
    )
}

const getState = (state) => {
    return {
        token : state.auth.token
    }
}
    

export default connect(getState)(Layout) ;