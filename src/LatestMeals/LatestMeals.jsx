import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard.jsx';
import ItemsCarousel from 'react-items-carousel';

const inline = {
  leftButton: {
    position: 'absolute',
    top: '50%',
    left: '-5px',
    fontSize: 32,
    color: 'black',
    opacity: '50%',
    userSelect: 'none',
    cursor: 'pointer'
  },

  rightButton: {
    position: 'absolute',
    top: '50%',
    right: '-5px',
    fontSize: 32,
    color: 'black',
    opacity: '50%',
    userSelect: 'none',
    cursor: 'pointer'
  }
}

const LatestMeals = () => {
  const [latestMealsList, setLatestMealsList] = useState(null);
  const [doneSearching, setDoneSearching] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  useEffect(() => {
    setDoneSearching(false);
    axios.get('http://localhost:3050/latest')
      .then(recipes => {
        setLatestMealsList(recipes.data);
        setDoneSearching(true);
      })
      .catch(err => {
        console.info('There was an error receiving latest meals from the server.')
      })
  }, []);

  if (doneSearching) {
    return (
      <div>
        <h2 className='title'>Browse Latest Recipes</h2>
        <div style={{ padding: `0 ${chevronWidth}px` }}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={4}
            gutter={20}
            leftChevron={<i className='material-icons' style={inline.leftButton}>arrow_circle_left</i>}
            rightChevron={<i className='material-icons' style={inline.rightButton}>arrow_circle_right</i>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {latestMealsList.map((recipe, index) => {
              return <RecipeCard recipe={recipe} key={index} />
            })}
          </ItemsCarousel>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className='title'>Browse Latest Recipes</h2>
      </div>
    );
  }
}

export default LatestMeals;