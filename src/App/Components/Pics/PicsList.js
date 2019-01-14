import React from "react";
import PicComponent from "./Pic/Pic";
import GetCSRFToken from '../../get/csrf';
import {Route, Switch} from "react-router-dom";


export default class PicsListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
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
                        this.setState({ pics: message });
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
        });
        this.setState({ isLoading: false });
    }

    render() {

        return (
            <div>
                { this.state.isLoading && <h1>Loading...</h1> }
                {/*{ this.state.pics.map((value, i) => <PicComponent props={ value } key={i} />) }*/}
                <Switch>
                    <Route
                        exact
                        path="/pictures"
                        render={ () =>
                            this.state.pics.map((value, i) => <PicComponent {...value} key={i} />) }
                    />
                    <Route
                        path="/pictures/:id"
                        component={ PicComponent }
                    />
                </Switch>
            </div>
        )
    }
};
