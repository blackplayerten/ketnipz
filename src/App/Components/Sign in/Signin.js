'use strict';

import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import MenuComponent from "../Menu/Menu";
import './Signin.css'

export default class SignInComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="title">
                    <Link to='/main' component={MenuComponent}>Ketnipz</Link>
                </div>
                <div className='signin'>
                    <div className='signin-block'>
                    <div className='signin--block'>
                        <h1 className=''> Login </h1>
                    </div>
                    <form>
                        <div className='inputs'>
                            <input className='input' type='text' placeholder='Nickname'/>
                            <input className='input' type='password' placeholder='Password'/>
                        </div>
                    </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}
