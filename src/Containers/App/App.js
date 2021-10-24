import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import React from "react" ;
import { useEffect } from 'react';
import * as service from '../../store/actions';
import { connect } from 'react-redux';
import { Suspense } from 'react';

import Layout from "../Layout/Layout";
import Auth from '../Auth/Auth';
import Logout from '../Auth/Logout/Logout';

const BurgerList = React.lazy(() => import( "../BurgerList/BurgerList" ));
const BurgerBuilder = React.lazy(() => import( '../Burger-Builder/BurgerBuilder' ));




function App(props) {
  useEffect(() => {
    props.authCheckState();

  }, [])
  // const  BurgerList = React.lazy("../BurgerList/BurgerList");
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/create" component={BurgerBuilder} />
              <Route path="/sign-in" component={Auth} />
              <Route path="/logout" component={Logout} />
              <Route path="/" component={BurgerList} />
            </Switch>
         </Suspense>
        </Layout>
       </div>
    </BrowserRouter>
    
  );
}

const dispatchToState = (dispatch) => {
  return {
    authCheckState : () => {dispatch(service.authCheckState())}
  }
}

export default connect(null,dispatchToState)(App);
