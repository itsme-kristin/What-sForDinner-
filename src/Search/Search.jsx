import React, { useState, useEffect } from 'react';
import SearchedRender from './SearchedRender';
import axios from 'axios';
import { Grid } from '@mui/material';

const Search = () => {
  const [searchedMeals, setSearchedMeals] = useState(null);
  const [ingredientSearch, setIngredientSearch] = useState(null);
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

  const handleIngredientSearch = (ingredientSearch) => {
    console.log(ingredientSearch);
    axios.get('http://localhost:3050/ingredient', {ingredient: ingredientSearch})
      .then(recipes => {
        setSearchedMeals(recipes.data);
      })
      .catch(err => {
        console.info('There was an error receiving random meals from the server.')
      })
  }

  return (
    <div>
      <h2 className='title'>Looking for a Recipe?</h2>
      <Grid container>
        <Grid item align='left' xs={5}>
          <form onSubmit={handleIngredientSearch}>
            <label className='searchText'>
              Search by Ingredient:
              <input type='text' name='Ingredient' onChange={handleIngredientChange} />
            </label>
            <input type='submit' value='Go!' />
          </form>
          </Grid>
          <Grid item align='left' xs={5}>
          <form>
            <label className='searchText'>
              Search by Recipe Keyword:
              <input type='text' name='Recipe' />
            </label>
            <input type='submit' value='Go!' />
          </form>
          </Grid>
          <Grid item align='left' xs={2}>
           <button onClick={handleSurprise}>Surprise Me!</button>
          </Grid>
      </Grid>
      <SearchedRender meals={searchedMeals}/>
    </div>
  );
}

export default Search;