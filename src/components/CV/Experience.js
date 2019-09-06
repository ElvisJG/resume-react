import React from 'react';

export default props => {
  return (
    <div className='experience-section'>
      <h3>
        <em>Exp</em>erience
      </h3>

      {props.resume.work.map(exp => (
        <div className='cv-experience' key={exp.company}>
          <p>
            <em>{exp.company}</em>
          </p>
          <p className='exp-title'>{exp.title}</p>
          {exp.description.map(bullet => {
            return (
              <ul key={bullet} className='exp-ul'>
                <li className='exp-li'>{bullet}</li>
              </ul>
            );
          })}
          <p className='duration'>{exp.duration}</p>
        </div>
      ))}
    </div>
  );
};
