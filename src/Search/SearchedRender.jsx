import React, { useState } from 'react';
import RecipeCard from '../LatestMeals/RecipeCard.jsx';
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
const SearchedRender = ({ meals }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  if (meals) {
    return (
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
          {meals.map((recipe, index) => {
            return <RecipeCard recipe={recipe} key={index} />
          })}
        </ItemsCarousel>
      </div>
    );
  } else {
    return null;
  }
}

export default SearchedRender;