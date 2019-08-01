import React from 'react';
import MenuButton from './MenuButton'
import './index.css';

export default (props) => (
    <section className="main__control control container">
        <h1 className="control__title">TASKMANAGER</h1>
        <section className="control__btn-wrap">
            <MenuButton name="Tasks" />
            <MenuButton name="Add New Task"/>
            <MenuButton name="Statistic"/>
            <MenuButton name="Search"/>
        </section>
    </section>
)

