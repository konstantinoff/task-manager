import React from 'react';
import './index.css';
import MainControl from './components/MainControl';
import SearchInput from './components/SearchInput';
import Filter from './components/Filter';

function App() {
  return (
      <main className="main">
          <MainControl />
          <SearchInput />
          <Filter/>
      </main>
  );
}

export default App;
