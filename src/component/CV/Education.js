import React from 'react';

export default props => {
  return (
    <div className='cv-section'>
      <h3>
        <em>Edu</em>cation
      </h3>

      {props.resume.education.map(edu => (
        <div className='cv-edu' key={edu.school}>
          <h5>{edu.graduated}</h5>
          <div className='cv-edu-mid'>
            <em>
              <p>{edu.degree}</p>
            </em>
            <p>{edu.description}</p>
          </div>
          <div className='cv-school'>
            <p>{edu.school}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
