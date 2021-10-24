import './Backdrop.css'

const Backdrop = props => {
    return props.show ? <div className="Backdrop" onClick={props.hide}></div> : null ;
}

export default Backdrop ;