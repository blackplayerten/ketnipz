import React from "react";
import './User.css';
import Link from "react-router-dom/es/Link";

export default class User extends React.Component {
    render() {
        return (
            <div className='sign-user-block_user'>
                <img src={this.props.avatar} className='sign-user-block_user__pic' alt='image user'/>
                <div className='sign-user-block_user__about'>
                    <Link to='/profile' className='sign-user-block_user__about_about'>{this.props.username}</Link>
                    <b className='sign-user-block_user__about_about'> {this.props.email}</b>
                </div>
            </div>
        )
    };
};
