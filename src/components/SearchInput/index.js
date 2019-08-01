import React from 'react';
import './index.css';

export default (props) => (
    <section className="main__search search container">
        <input
            type="text"
            id="search__input"
            className="search__input search__input--hidden"
            placeholder="START TYPING — SEARCH BY WORD, #HASHTAG OR DATE"
        />
        <label className="visually-hidden" htmlFor="search__input">Поиск</label>
    </section>
)

