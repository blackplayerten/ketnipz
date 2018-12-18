'use strict';

import React from 'react';
import './style.css';

import MenuComponent from './Components/Menu/Menu.js';
import SignInComponent from "./Components/Sign in/Signin.js";
import {Route, Switch, Link} from 'react-router-dom';
import SignUpComponent from "./Components/Sign up/Signup";

export default class App extends React.Component {
    render() {
        return (
            <div className="root">
                <Switch>
                    <Route exaсt path='/main' component={MenuComponent} />
                    <Route path='/signin' component={SignInComponent} />
                    <Route path='/signup' component={SignUpComponent} />
                </Switch>
            </div>
        );
    }
};
