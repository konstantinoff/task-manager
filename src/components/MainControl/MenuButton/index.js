import React from 'react';
import './index.css';

export default (props) => (
    <button
        disabled
        className="control__label"
    >
    {props.name}
    </button>
)

