'use strict';

import React, {Fragment} from 'react';
import {Errors} from "./Errors";
import './Formup.css';
import './Signup.css';
import {Link} from "react-router-dom";
import MenuComponent from "../Menu/Menu";
import SigninComponent from "../Signin/Form";

class SignupComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            email: '',
            password: '',
            password_repeat: '',
            errors: {email: '', password: '', password_repeat: ''},
            loginValid: false,
            emailValid: false,
            passwordValid: false,
            password_repeatValid: false,
            formValid: false
        }
    }

    validateField(field, value) {
        let loginValid = this.state.loginValid;
        let fieldErrors = this.state.errors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        switch (field) {
            case 'login':
                loginValid = value.length < 20;
                fieldErrors.login = loginValid ? '' : ' can\'t be more 20 symbols';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 4;
                fieldErrors.password = passwordValid ? '' : ' is too short';
                break;
        }
        this.setState({
            errors: fieldErrors,
            loginValid,
            emailValid,
            passwordValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.loginValid && this.state.emailValid &&
                this.state.passwordValid});
    }

    render() {

        const onHandle = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            this.setState({[name]: value}, () => {
                this.validateField(name, value)
            });
        };

        return (
            <Fragment>
                <div className="title">
                    <Link to='/' component={MenuComponent}>Ketnipz</Link>
                </div>
                <header className='sign'>
                    <div className='sign__block sign__text'>
                        <h1> Sign up </h1>
                        <form className='sign-inputs' action='/' encType=''>
                            <div className='sign-inputs_errors'>
                                <Errors errors={this.state.errors}/>
                            </div>
                            <input type='login' name='login' className='sign-inputs__input' placeholder='login'
                                   value={this.state.login} onChange={onHandle}
                            />
                            <input type='email' name='email' className='sign-inputs__input' placeholder='e-mail'
                                   value={this.state.email} onChange={onHandle}
                            />
                            <input type='password' name='password' className='sign-inputs__input' placeholder='password'
                                   value={this.state.password} onChange={onHandle}
                            />
                            <input type="file" name="avatar" className='sign-inputs__avatar' placeholder="" />
                            <div className='but-auth but-cute'>
                                <button type='submit' className='sign__text but-auth__but but-auth__but_active'
                                        disabled={!this.state.formValid}>Sign up
                                </button>
                                <div className='but-auth'>
                                    <Link to='/signin' component={SigninComponent}>
                                        <a className='sign__text but-auth__but'> Sign in</a>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default SignupComponent;
