import React from 'react';
import './index.css';

export default (props) => (
    <button className="filter__label">
        {props.name}
        <span className="filter__all-count"> {props.count}</span>
    </button>
)
