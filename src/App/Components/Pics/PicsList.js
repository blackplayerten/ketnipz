import React, {Fragment} from "react";
import PicComponent from "./Pic/Pic";
import GetCSRFToken from '../../get/csrf';
import {Link, Route, Switch} from "react-router-dom";
import './PicsList.css'
import MenuComponent from "../Menu/Menu";
import header from "../../img/Ketnipz_Header.png";
import PicLargeComponent from "./Pic/PicLarge";


export default class PicsListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Loader: true,
            pics: [],
        }
    }

    componentDidMount() {
        this.getPics();
    }

    getPics() {
        const token = window.localStorage.getItem('token');
        if (!token) {
            // redirect to /signin
            return
        }
        fetch('/api/files', {
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
                        this.setState({pics: message});
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
            this.setState({Loader: false});
        });
    }

    render() {
        let pics_block;
        if (this.state.pics && this.state.Loader) {
            pics_block = <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        } else {
            pics_block = <Switch>
                <Route
                    exact
                    path="/pictures"
                    render={() => this.state.pics.map((value, i) =>
                        <PicComponent {...value} id={i} key={i}/>)}
                />
                <Route
                    path="/pictures/:id"
                    render={() => <PicLargeComponent/>}
                />
            </Switch>
        }

        return (
            <Fragment>
                <Link to='/' component={MenuComponent} className="title">
                    <img className='title_pic' src={header}/>
                </Link>
                <div className='pic'>
                    <div className='pic_block'>
                        <div className='pic_content'>
                            {pics_block}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
};
