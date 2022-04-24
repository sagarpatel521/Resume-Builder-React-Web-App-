import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./hoc/layout/layout";
import Builder from "./features/builder/builder";
import Home from "./features/home/home";
import AuthService from './shared/services/helper';
import Login from './Login/Sign_in';
import SignUp from './Login/Register';
import Register from "./Login/Register";
import { useState } from "react/cjs/react.production.min";

const App = () => {

  
  return (
    <div className="App">
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/' component={sagar} /> */}
            <Route exact path='/resume-builder' component={Builder} />
            <Route exact path='/register' component={Register} />
            <Redirect to='/' />
          </Switch>
        </Layout>
      
    </div>
  );
}

export default App;
