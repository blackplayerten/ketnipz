import React from "react";

import './Pic.css';

export default class PicComponent extends React.Component {
    render() {
        return (
            <div className='pic'>
                <img src={ this.props.file } className='pic-img' alt='image ketnipz'/>
                <h1>{ this.props.name }</h1>
                <div className='pic-about pic-about__gray'>
                    <span>{ this.props.uploaded_by }</span>
                    <span>{ this.props.uploaded_time }</span>
                </div>
                <p>{ this.props.about }</p>
            </div>
        )
    };
};
