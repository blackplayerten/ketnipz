import React, {Fragment} from 'react';
import image from "../../img/0d092fbba905624c6eb2545f75165860.png";
import header from '../../img/Ketnipz_Header.png';
import SigninComponent from "../Signin/Form";
import {Link, Route, Switch} from "react-router-dom";
import '/Users/sash/projects/ketnipz/src/App/style.css'
import './Menu.css';
import '/Users/sash/projects/ketnipz/src/App/Components/Button/Button.css'
import PicsListComponent from "../Pics/PicsList";
import AboutComponent from "../About/About";
import GetCSRFToken from "../../get/csrf";
import User from "../User/User";


class MenuComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            not_authenticated: true,
            user: {},
        }
    }

    componentDidMount() {
        this.getUser();
    }

    getUser() {
        const token = window.localStorage.getItem('token');
        if (!token) {
            // redirect to /signin
            return
        }
        fetch('/api/user', {
            method: 'GET',
            headers: new Headers({
                'X-CSRFToken': GetCSRFToken(),
                'Authorization': 'Token ' + token,
            }),
        }).then(response => {
            switch (response.status) {
                case 200:
                    response.json().then(message => {
                        console.log(message);
                        this.setState({user: message});
                    }).catch((e) => {
                        console.log(e);
                    });
                    break;
                case 401:
                    // redirect to /signin
                    break;
                case 404:
                    console.log('404');
                    break;
                default:
                    console.log('Unknown error');
                    return;
            }
        }).then(() => {
            this.setState({not_authenticated: false});
        });
    }


    render() {
        let user_block;
        if (this.state.not_authenticated) {
            user_block =
                <Link to='/signin' component={SigninComponent} className='sign-user-block_sign'>SignIn</Link>
        } else {
            user_block = <Switch>
                <Route
                    exact
                    path="/"
                    component={User}
                />
            </Switch>
        }

        return (
            <Fragment>
                <div className='sign-user-block'>
                    {user_block}
                </div>
                    <Link to='/' component={MenuComponent} className="title">
                        <img className='title_pic' src={header}/>
                    </Link>
                <div className='menu'>
                    <div className="but-cute">
                        <Link to='/about' component={AboutComponent} className='but-cute__but'>About</Link>
                    </div>
                    <div className="but-cute">
                        <Link to='/pictures' component={PicsListComponent} className='but-cute__but'>Pictures</Link>
                    </div>
                    <img className='ket' src={image}/>
                </div>
            </Fragment>
        )
    }
}

export default MenuComponent;
