import React from 'react';
import './index.css';

const  FilterButton = (props) => (
    <button className="filter__label">
        {props.name}
        <span className="filter__all-count"> {props.count}</span>
    </button>
);

export default FilterButton

