import React from 'react';

export default props => {
  return (
    <div className='cv-section'>
      <h3>
        <em>Exp</em>erience
      </h3>

      {props.resume.work.map(exp => (
        <div className='cv-experience' key={exp.company}>
          <em>
            <p>{exp.company}</p>
          </em>
          <p className='exp-title'>{exp.title}</p>
          {exp.description.map(bullet => {
            return (
              <ul key={bullet} className='exp-ul'>
                <li className='exp-li'>{bullet}</li>
              </ul>
            );
          })}
          <div className='duration'>
            <p>{exp.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
