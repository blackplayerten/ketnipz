'use strict';

import React, {Fragment} from 'react';
import {Errors} from "./Errors";
import './Formin.css';
import './Signin.css';
import '/Users/sash/projects/ketnipz/src/App/Components/Button/Button.css';
import {Link} from "react-router-dom";
import MenuComponent from "../Menu/Menu";
import SignupComponent from "../Signup/Form";
import GetCSRFToken from "../../get/csrf";
import header from "../../img/Ketnipz_Header.png";

class SigninComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {username: '', password: ''},
            usernameValid: false,
            passwordValid: false,
            formValid: false
        };
    }

    validateField(field, value) {
        let fieldErrors = this.state.errors;
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;
        switch (field) {
            case 'username':
                usernameValid = true;
                fieldErrors.username = usernameValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 4;
                fieldErrors.password = passwordValid ? '' : ' is too short';
                break;
        }
        this.setState({
            errors: fieldErrors,
            usernameValid: usernameValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.usernameValid && this.state.passwordValid});
    }

    render() {
        const onSubmit = (e) => {
            e.preventDefault();

            console.log(e.target);
            const data = new FormData(e.target);
            fetch('/api/login', {
                method: 'POST',
                body: data,
            }).then(response => {
                switch (response.status) {
                    case 200:
                        response.json().then(message => {
                            localStorage.setItem('token', message.token);
                            // redirect to /pictures
                        }).catch((e) => {
                            console.log(e);
                        });
                        break;
                    case 401:
                        // redirect to /signin
                        break;
                    case 404:
                        // catch error
                        this.setState({errors: {username: ' or password is invalid'}});
                        break;
                    default:
                        console.log('Unknown error');
                }
            });
        };

        const onHandle = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            this.setState({[name]: value}, () => {
                this.validateField(name, value)
            });
        };

        return (
            <Fragment>
                <Link to='/' component={MenuComponent} className="title">
                    <img className='title_pic' src={header}/>
                </Link>
                <header className='sign'>
                    <div className='sign__block sign__text'>
                        <h1> Sign in </h1>
                        <form className='sign-inputs' action='/' encType='' method='post' onSubmit={onSubmit}>
                            <div className='sign-inputs_errors'>
                                <Errors errors={this.state.errors}/>
                            </div>
                            <input type='text' name='username' className='sign-inputs__input' placeholder='login'
                                   value={this.state.username} onChange={onHandle}
                            />
                            <input type='password' name='password' className='sign-inputs__input' placeholder='password'
                                   value={this.state.password} onChange={onHandle}
                            />
                            <div className='sign-inputs__buttons'>
                                <button type='submit' className='sign__text button-submit'
                                        disabled={!this.state.formValid}>Sign in
                                </button>
                                <Link to='/signup' component={SignupComponent} className='sign__text button-link'>Sign up</Link>
                            </div>
                        </form>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default SigninComponent;
