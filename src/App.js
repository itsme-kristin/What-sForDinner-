import React from 'react';
import './App.css';
import Header from './Header/Header.jsx';
import LatestMeals from './LatestMeals/LatestMeals.jsx';
import Search from './Search/Search.jsx';

function App() {
  return (
    <div className="App">
        <Header />
        <LatestMeals />
        <Search />
    </div>
  );
}

export default App;
