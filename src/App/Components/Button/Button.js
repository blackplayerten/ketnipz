'use strict';

import './Button.css';
import React from 'react';

export default class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Goto = (e) => {
            e.preventDefault();

        };

        return (
            <a className={this.props.className} onClick={Goto}>{this.props.text}</a>
        );
    }
}
