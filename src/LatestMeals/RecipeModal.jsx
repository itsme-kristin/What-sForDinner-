import React from 'react';
import { Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  recipeModal: {
    position: 'absolute',
    width: 900,
    height: 650,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '10px'
  },
  recipePhoto: {
    margin: '4px',
    width: '200px',
    height: '200px'
  },
})
const RecipeModal = ({ recipe }) => {
  const classes = useStyles();

  const getIngredientList = () => {
    const ingredientList= [];
    ingredientList.push(recipe.strMeasure1);
    ingredientList.push(recipe.strMeasure2);
    ingredientList.push(recipe.strMeasure3);
    ingredientList.push(recipe.strMeasure4);
    ingredientList.push(recipe.strMeasure5);
    ingredientList.push(recipe.strMeasure6);
    ingredientList.push(recipe.strMeasure7);
    ingredientList.push(recipe.strMeasure8);
    ingredientList.push(recipe.strMeasure9);
    ingredientList.push(recipe.strMeasure10);
    ingredientList.push(recipe.strMeasure11);
    ingredientList.push(recipe.strMeasure12);
    ingredientList.push(recipe.strMeasure13);
    ingredientList.push(recipe.strMeasure14);
    ingredientList.push(recipe.strMeasure15);
    ingredientList.push(recipe.strMeasure16);
    ingredientList.push(recipe.strMeasure17);
    ingredientList.push(recipe.strMeasure18);
    ingredientList.push(recipe.strMeasure19);
    ingredientList.push(recipe.strMeasure20);
    ingredientList[0] += ' ' + recipe.strIngredient1;
    ingredientList[1] += ' ' + recipe.strIngredient2;
    ingredientList[2] += ' ' + recipe.strIngredient3;
    ingredientList[3] += ' ' + recipe.strIngredient4;
    ingredientList[4] += ' ' + recipe.strIngredient5;
    ingredientList[5] += ' ' + recipe.strIngredient6;
    ingredientList[6] += ' ' + recipe.strIngredient7;
    ingredientList[7] += ' ' + recipe.strIngredient8;
    ingredientList[8] += ' ' + recipe.strIngredient9;
    ingredientList[9] += ' ' + recipe.strIngredient10;
    ingredientList[10] += ' ' + recipe.strIngredient11;
    ingredientList[11] += ' ' + recipe.strIngredient12;
    ingredientList[12] += ' ' + recipe.strIngredient13;
    ingredientList[13] += ' ' + recipe.strIngredient14;
    ingredientList[14] += ' ' + recipe.strIngredient15;
    ingredientList[15] += ' ' + recipe.strIngredient16;
    ingredientList[16] += ' ' + recipe.strIngredient17;
    ingredientList[17] += ' ' + recipe.strIngredient18;
    ingredientList[18] += ' ' + recipe.strIngredient19;
    ingredientList[19] += ' ' + recipe.strIngredient20;
    for (let i = 0; i < ingredientList.length; i++) {
      if (ingredientList[i] === '') {
        ingredientList.splice(ingredientList[i], 1);
      }
    }
    return ingredientList;
  }
  const modalData = {
    photo: recipe.strMealThumb,
    title: recipe.strMeal,
    ingredients: getIngredientList(),
    directions: recipe.strInstructions
  }

  return (
    <Paper className={classes.recipeModal}>
      <Grid container spacing={2} direction='row'>
        <Grid container item xs={3} direction='column'>
          <Grid item xs={2} >
            <h3 className='title'>{modalData.title}</h3>
          </Grid>
          <Grid item xs={9} >
            <Paper
              className={classes.recipePhoto}
              style={{
                backgroundImage: `url(${modalData.photo})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            >
            </Paper>
          </Grid>
        </Grid>
        <Grid container item xs={9} direction='column' wrap='nowrap'>
          <Grid item xs={1} >
            <h4 className='title'>Ingredients:</h4>
          </Grid>
          <Grid item xs={4}>
            {modalData.ingredients.map((ingredient, index) => {
              return <div className='recipeText' key={index} >{ingredient}</div>
            })}
          </Grid>
          <Grid item xs={1} >
            <h4 className='title'>Directions:</h4>
          </Grid>
          <Grid item xs={6} >
              <div className='recipeText' >{modalData.directions}</div>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default RecipeModal;