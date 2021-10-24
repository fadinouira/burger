import * as service from '../../../store/actions';
import { useEffect } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

const Logout = (props)=> {
    useEffect(() => {
        props.onLogOut();
        
    }, []);

    return (
        <Redirect to="/"/>
    )
}

const dispatchToProps = (dispatch) => {
    return {
        onLogOut : () =>{dispatch(service.logOut())}
    }
}

export default connect(null,dispatchToProps) (Logout);