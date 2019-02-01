import React from "react";
import {Link} from "react-router-dom";
import moment from "./PicLarge.css";

export default class PicLargeComponent extends React.Component {
    render() {

        return (
            <div className='piclarge-card'>
                <img src={this.props.file} className='piclarge-card__img' alt='image ketnipz'/>
                {/*/!*<Link to='/pictures/:id' component={PicLargeComponent}>*!/*/}
                    {/*/!*<h1 className='piclarge-card__name'>{this.props.name}</h1>*!/*/}
                {/*</Link>*/}
                <div className='piclarge-card__about'>
                    <div className='about-item-large'>
                        <b className='about-item-large_header'> Uploaded by: </b>
                        <b className='about-item-large__item'>{this.props.uploaded_by}</b>
                    </div>
                    <div className='about-item-large'>
                        <b className='about-item-large_header'>Time:</b>
                        <b className='about-item-large__item'> {moment(this.props.uploaded_time).startOf('day').fromNow()}</b>
                    </div>
                    <div className='about-item-large'>
                        <b className='about-item-large_header'>About:</b>
                        <b className='about-item-large__item'>{this.props.about}</b>
                    </div>
                </div>
            </div>
        )
    };
};
