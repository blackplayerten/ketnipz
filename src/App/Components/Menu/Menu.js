'use strict';

import React, {Fragment} from 'react';
import image from "../../img/ket-holiday.png";
import ButtonComponent from "../Button/Button";
import SigninComponent from "../Signin/Form";
import {Link} from "react-router-dom";
import './Menu.css';
import PicsListComponent from "../Pics/PicsList";


class MenuComponent extends React.Component {
    render() {
        return (
            <Fragment>
                <div className='but-menu-row'>
                    <Link to='/signin' component={SigninComponent}>
                        <a className='but-auth__but'>SignIn</a>
                    </Link>
                </div>
                <div className="ttle">
                    <Link to='/' component={MenuComponent}>Ketnipz</Link>
                </div>
                <div className="menu">
                    <ButtonComponent text='About' className='but-cute__but' href='/about'/>
                    {/*<ButtonComponent text='Pictures' className='but-cute__but' href='/pictures'/>*/}
                    <Link to='/pictures' component={PicsListComponent}>
                        <a className='but-cute__but'>Pictures</a>
                    </Link>
                    <ButtonComponent text='Products' className='but-cute__but' href='/products'/>
                </div>
            </Fragment>
        )
    }
}

export default MenuComponent;
