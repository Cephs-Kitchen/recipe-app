import './App.css';
import React, {useEffect, useState} from 'react';
import Recipes from './Recipes';

const App = () => {
  const APP_ID = 'be652e2b';
  const APP_KEY = 'd0fe2ca390c4d1aec0dfad7965159103';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = (event) => {
    setSearch(event.target.value);
  }

  const getSearch = (event) => {
    event.prevent.default();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className='App'>
      <h1 className='page-title'>Welcome to Ceph's Citchen</h1>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
        <button className='search-button' type='submit'>Search</button>
      </form>
      <div className='recipes'>
      {recipes.map(recipes => (
        <Recipes 
        key= {recipes.recipe.label}
        title={recipes.recipe.label} 
        ingredients={recipes.recipe.ingredients} 
        image={recipes.recipe.image}/>
      ))}
      </div>
    </div>

  );

}

export default App;
