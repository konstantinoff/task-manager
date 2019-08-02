import React from 'react';
import FilterButton from './FilterButton';
import './index.css';

const Filter =  (props) => (
    <section className="main__filter filter container">
        <FilterButton name="All" count="15"/>
        <FilterButton name="Overdue" count="15"/>
        <FilterButton name="Today" count="15"/>
        <FilterButton name="Favorites" count="15"/>
        <FilterButton name="Repeating" count="15"/>
        <FilterButton name="Tags" count="15"/>
        <FilterButton name="Archive" count="15"/>
    </section>
);

export default Filter
