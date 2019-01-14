'use strict';

import React from "react";

export const Errors = (errors) => {
    errors = errors.errors;
    return <div className='sign-inputs_errors'>
        {Object.keys(errors).map((field, i) => {
            console.log(errors);
            if (errors[field].length > 0) {
                return (
                    <p key={i}>{field + errors[field]}</p>
                )
            } else {
                return '';
            }
        })}
    </div>
};
