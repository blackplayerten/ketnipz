import React from "react";
import './Pic.css';
import moment from "moment";
import {Link} from "react-router-dom";
import PicLargeComponent from "./PicLarge";

export default class PicComponent extends React.Component {
    render() {
        return (
            <div className='pic-card'>
                <img src={this.props.file} className='pic-card__img' alt='image ketnipz'/>
                <Link to='/pictures/:id' component={PicLargeComponent} className='pic-card__name'>{this.props.name}</Link>
                <div className='pic-card__about'>
                    <div className='pic-card__about_item'>Uploaded: {this.props.uploaded_by}</div>
                    <div className='pic-card__about_item'> {moment(this.props.uploaded_time).startOf('day').fromNow()}</div>
                    <div className='pic-card__about_item pic-card__about_item-comment'>{this.props.about} </div>
                </div>
            </div>
        )
    };
};
