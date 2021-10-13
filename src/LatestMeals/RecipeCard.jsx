import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Modal } from '@mui/material';
import { makeStyles } from '@mui/styles';
import RecipeModal from './RecipeModal.jsx';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 230,
    height: 280,
  },
  media: {
    paddingTop: '80%',
    cursor: 'pointer',
  },
  content: {
    cursor: 'pointer',
  },
}));

const RecipeCard = ({ recipe }) => {
  const [showRecipe, setShowRecipe] = useState(false);
  const classes = useStyles();

  const openShowRecipe = () => {
    setShowRecipe(true);
  }

  const closeShowRecipe = () => {
    setShowRecipe(false);
  }

  return (
    <React.Fragment>
      <Card className={classes.root} variant='outlined' onClick={openShowRecipe}>
        <CardMedia
          component='div'
          className={classes.media}
          image={recipe.strMealThumb}
          title={recipe.strMeal}
        />
        <CardContent className={classes.content}>
          <h3 className='recipeTitle'>{recipe.strMeal}</h3>
        </CardContent>
      </Card>
      <Modal open={showRecipe} onClose={closeShowRecipe} >
        <RecipeModal recipe={recipe}/>
      </Modal>
    </React.Fragment>
  );
}

export default RecipeCard;
