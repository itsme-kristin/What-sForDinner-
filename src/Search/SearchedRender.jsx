import React, { useState } from 'react';
import RecipeCard from '../LatestMeals/RecipeCard.jsx';
import ItemsCarousel from 'react-items-carousel';

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
          leftChevron={<button>{'<'}</button>}
          rightChevron={<button>{'>'}</button>}
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