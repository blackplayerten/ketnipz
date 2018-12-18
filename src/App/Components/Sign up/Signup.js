'use strict';

import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import MenuComponent from "../Menu/Menu";
import './Signup.css'

export default class SignUpComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="title">
                    <Link to='/main' component={MenuComponent}>Ketnipz</Link>
                </div>
                <div className='signup'>
                    <div className='signup-block'>
                        <div className='signup--block'>
                            <h1 className=''> Sign up </h1>
                        </div>
                        <form>
                            <div className='inputs'>
                                <input className='input' type='text' placeholder='Nickname'/>
                                <input className='input' type='email' placeholder='Email'/>
                                <input className='input' type='password' placeholder='Password'/>
                                <input className='input' type='password' placeholder='Repeat password'/>
                            </div>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}
