import React from 'react';
import './index.css';

const MenuButton = (props) => (
    <button
        disabled
        className="control__label"
    >
    {props.name}
    </button>
);

export default MenuButton

