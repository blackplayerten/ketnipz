import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import MenuComponent from "../Menu/Menu";
import header from "../../img/Ketnipz_Header.png";
import './About.css';
import image from "../../img/47437311_2479999825348680_8069397420983202550_n.png";

class AboutComponent extends React.Component {
    render() {
        return (
            <Fragment>
                <Link to='/' component={MenuComponent} className="title">
                    <img className='title_pic' src={header}/>
                </Link>
                <div className='about'>
                    <div className='about-block'>
                        <div className='about-content'>
                            <h1 className='about-content__header'>Who is Ketnipz?</h1>
                            <p className='about-content__text'>
                                The creation of a 17-year-old illustrator and artist Harry Wembley – a bean named
                                Ketnipz (@ketnipz).
                            </p>
                            <p className='about-content__text'>
                                Ketnipz is the hero of a short but vital
                                comic book drawn by an 18-year-old artist from Cardiff. </p>
                            <p className='about-content__text'> Ketnipz is popular in Instagram stories
                                and gradually penetrates into popular culture. And all because she is terribly cute.
                            </p>
                            <img className='ketnipz-about' src={image}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AboutComponent;
