import React  from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";
import { Component } from "react";


class Modal extends Component {
    

    render() {
        let heigth = {top : this.props.size,bottom : this.props.size} ;
        return (
            <Aux>
                <Backdrop show={!this.props.disabled} hide={this.props.hide} />
                <div className="Modal" hidden={this.props.disabled} style={heigth}>
                    {this.props.children}
                </div>
            </Aux> 
        )
    }        
} 

export default Modal ;