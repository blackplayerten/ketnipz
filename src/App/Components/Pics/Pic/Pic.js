import React from "react";
import './Pic.css';

export default class PicComponent extends React.Component {
    render() {
        return (
            <div className='pic-card'>
                <img src={this.props.file} className='pic-card__img' alt='image ketnipz'/>
                <h1 className='pic-card__name'>{this.props.name}</h1>
                <div className='pic-card__about'>
                    <div className='about-item'>
                        <b className='about-item_header'> Uploaded by: </b>
                        <b className='about-item__item'>{this.props.uploaded_by}</b>
                    </div>
                    <div className='about-item'>
                        <b className='about-item_header'>Time:</b>
                        <b className='about-item__item'> {this.props.uploaded_time}</b>
                    </div>
                    <div className='about-item'>
                        <b className='about-item_header'>About:</b>
                        <b className='about-item__item'>{this.props.about}</b>
                    </div>
                </div>
            </div>
        )
    };
};
