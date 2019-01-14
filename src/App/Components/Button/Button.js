'use strict';

import './Button.css';
import React from 'react';
import {Link, Redirect} from "react-router-dom";
import SigninComponent from "../Signin/Form";

export default class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);
        this.setState(
            {redirect: true}
        )
    }


    render() {
        const Goto = (e) => {
            e.preventDefault();

            if (this.state.redirect) {
                return <Redirect push to={this.props.href} />;
            }
        };

        return (
            <a className={this.props.className} onClick={Goto}>{this.props.text}</a>
        );
    }
}
