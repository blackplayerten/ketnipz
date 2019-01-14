'use strict';

import React from 'react';
import './style.css';

import MenuComponent from './Components/Menu/Menu.js';
import SigninComponent from "./Components/Signin/Form";
import {Route, Switch} from 'react-router-dom';
import SignupComponent from "./Components/Signup/Form";
import PicsListComponent from "./Components/Pics/PicsList";

class App extends React.Component {
    render() {
        return (
            <div className='root'>
                <Switch>
                    <Route path='/signin' component={SigninComponent}/>
                    <Route path='/signup' component={SignupComponent}/>
                    <Route path='/pictures' component={PicsListComponent}/>
                    <Route path='/' component={MenuComponent}/>
                </Switch>
            </div>
        );
    }
}

export default App;
