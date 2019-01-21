import React from "react";
import './User.css';

export default class UserComponent extends React.Component {
    render() {
        return (
            <div className='user-card'>
                <img src={this.props.avatar} className='user-card__avatar' alt='image user'/>
                <div className='user-card__about'>
                    <div className='user-item'>
                        <b className='user-item_header'> Username: </b>
                        <b className='user-item__item'>{this.props.username}</b>
                    </div>
                    <div className='user-item'>
                        <b className='user-item_header'>Email:</b>
                        <b className='user-item__item'> {this.props.email}</b>
                    </div>
                </div>
            </div>
        )
    };
};
