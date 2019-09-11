import React from 'react';

export default props => {
  const { bio, skills } = props.main;
  return (
    <div className='interests-section'>
      <h3>
        <em>About</em> Me
      </h3>
      <p>{bio}</p>
      <p>
        <em>Skills:</em> {skills}
      </p>
    </div>
  );
};
