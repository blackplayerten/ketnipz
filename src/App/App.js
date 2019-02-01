'use strict';

import React from 'react';
import MenuComponent from './Components/Menu/Menu.js';
import SigninComponent from "./Components/Signin/Form";
import {Route, Switch} from 'react-router-dom';
import SignupComponent from "./Components/Signup/Form";
import PicsListComponent from "./Components/Pics/PicsList";
import AboutComponent from "./Components/About/About";

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/signin' component={SigninComponent}/>
                <Route path='/signup' component={SignupComponent}/>
                <Route path='/pictures' component={PicsListComponent}/>
                <Route path='/about' component={AboutComponent}/>
                <Route path='/' component={MenuComponent}/>
            </Switch>
        );
    }
}

export default App;
