import React, {Fragment} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import MenuComponent from "../Menu/Menu";
import header from "../../img/Ketnipz_Header.png";
import './About.css';
import image from "../../img/47437311_2479999825348680_8069397420983202550_n.png";

class AboutComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Loader: true,
        }
    }

    render() {
        return (
            <Fragment>
                <div className="ttle">
                    <Link to='/' component={MenuComponent}>
                        <img className='ttle_pic' src={header}/>
                    </Link>
                </div>
                <div className='about-block'>
                    <div className='about-block__block'>
                        <div className='about-block__block_content'>
                            <div className='about-header'>Who is Ketnipz?</div>
                            <p className='about-content'>
                                The creation of a 17-year-old illustrator and artist Harry Wembley – a bean named
                                Ketnipz (@ketnipz).
                            </p>
                            <p className='about-content'>
                                Ketnipz is the hero of a short but vital
                                comic book drawn by an 18-year-old artist from Cardiff. </p>
                            <p className='about-content'> Ketnipz is popular in Instagram stories
                                and gradually penetrates into popular culture. And all because she is terribly cute.
                            </p>
                            <img className='ketnipz' src={image}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AboutComponent;
