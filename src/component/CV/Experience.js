import React from 'react';

export default props => {
  return (
    <div className='cv-section'>
      <h3>
        <em>Exp</em>erience
      </h3>

      {props.resume.work.map(exp => (
        <div className='cv-experience'>
          <em>
            <p>{exp.company}</p>
          </em>
          <p>{exp.title}</p>
          <p>{exp.description}</p>
          <div className='duration'>
            <p>{exp.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
