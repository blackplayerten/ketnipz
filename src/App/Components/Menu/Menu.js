'use strict';

import React, {Fragment} from 'react';
import image from "../../img/ket-holiday.png";
import ButtonComponent from "../Button/Button";
import SignInComponent from "../Sign in/Signin";
import {Link} from "react-router-dom";
import './Menu.css';
import SignUpComponent from "../Sign up/Signup";

export default class MenuComponent extends React.Component {
    render() {
        return (
            <Fragment>
                <div className='pos-but-auth'>
                    <Link to='/signup' component={SignUpComponent}>
                        <a className='but-auth'>Sign up</a>
                    </Link>
                    <Link to='/signin' component={SignInComponent}>
                        <a className='but-auth'>Sign in</a>
                    </Link>
                </div>
                <div className="ttle">
                    <Link to='/main' component={MenuComponent}>Ketnipz</Link>
                </div>
                <div className="menu">
                    <img className='ket-main' src={image}/>
                    <div className='buttons'>
                        <ButtonComponent text='История' className='but-cute' href='google.com'/>
                        <ButtonComponent text='О ketnipz' className='but-cute' href='google.com'/>
                        <ButtonComponent text='Картинки' className='but-cute' href='google.com'/>
                        <ButtonComponent text='Продукция' className='but-cute' href='google.com'/>
                    </div>
                </div>
            </Fragment>
        )
    }
}
