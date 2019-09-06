import React from 'react';

export default props => {
  const { bio, prointerests } = props.main;
  return (
    <div className='interests-section'>
      <h3>
        <em>Int</em>erests
      </h3>
      <p>
        <em>About Me</em> {bio}
      </p>
      <p>
        <em>Professional Interests</em> {prointerests}
      </p>
    </div>
  );
};
