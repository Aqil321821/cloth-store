import './directory.styles.scss';
import CategoryItem from '../category-item/Category-item.compt';

import React from 'react';

const Directory = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
