import React from 'react';

export default props => {
  return (
    <div className='cv-title'>
      <div className='title-text'>
        <h1>{props.main.name}</h1>
        <h2>{props.main.cv_description}</h2>
      </div>
    </div>
  );
};
