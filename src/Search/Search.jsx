import React, { useState } from 'react';
import SearchedRender from './SearchedRender';
import axios from 'axios';
import { Grid } from '@mui/material';

const Search = () => {
  const [searchedMeals, setSearchedMeals] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);
  const [ingredientSearch, setIngredientSearch] = useState('');
  const [recipeSearch, setRecipeSearch] = useState(null);

  const handleSurprise = () => {
    axios.get('http://localhost:3050/random')
      .then(recipes => {
        setSearchedMeals(recipes.data);
      })
      .catch(err => {
        console.info('There was an error receiving random meals from the server.')
      })
  }

  const handleIngredientChange = (event) => {
    setIngredientSearch(event.target.value);
  }

  const handleIngredientSearch = (event) => {
    event.preventDefault();
    axios.get('http://localhost:3050/ingredient', { params: {'ingredient': ingredientSearch } })
      .then(recipes => {
        setSearchedMeals(recipes.data);
        setIngredientSearch('');
        setSearchClicked(true);
      })
      .catch(err => {
        console.info('There was an error receiving random meals from the server.')
      })
  }

  const handleRecipeChange = (event) => {
    setRecipeSearch(event.target.value);
  }

  const handleRecipeSearch = (event) => {
    event.preventDefault();
    axios.get('http://localhost:3050/recipe', { params: {'recipe': recipeSearch } })
      .then(recipes => {
        setSearchedMeals(recipes.data);
        setRecipeSearch('');
        setSearchClicked(true);
      })
      .catch(err => {
        console.info('There was an error receiving random meals from the server.')
      })
  }


  return (
    <div>
      <h2 className='title'>Looking for Recipes?</h2>
      <Grid container className='searchOptions'>
        <Grid item align='left' xs={5}>
          <form onSubmit={handleIngredientSearch}>
            <label className='searchText'>
              Search by Ingredient:
              <input type='text' name='Ingredient' value={ingredientSearch} onChange={handleIngredientChange} />
            </label>
            <input type='submit' value='Go!' />
          </form>
          </Grid>
          <Grid item align='left' xs={5}>
          <form onSubmit={handleRecipeSearch}>
            <label className='searchText'>
              Search by Recipe Keyword:
              <input type='text' name='Recipe' value={recipeSearch} onChange={handleRecipeChange}/>
            </label>
            <input type='submit' value='Go!' />
          </form>
          </Grid>
          <Grid item align='left' xs={2}>
           <button onClick={handleSurprise}>Surprise Me!</button>
          </Grid>
      </Grid>
      {searchClicked && !searchedMeals.length ?
        <div>Sorry, there were no recipes that matched your search.</div> : <SearchedRender meals={searchedMeals}/>}
    </div>
  );
}

export default Search;