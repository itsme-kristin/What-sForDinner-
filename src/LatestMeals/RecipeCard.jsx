import React from 'react';
import { Card, CardMedia, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
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
  const classes = useStyles();

  return (
    <Card className={classes.root} variant='outlined'>
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
  );
}

export default RecipeCard;
