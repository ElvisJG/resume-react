import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

export default props => {
  return (
    <div className='cv-section'>
      <h3>
        <em>Edu</em>cation
      </h3>

      {props.resume.education.map(edu => (
        <div className='cv-edu' key={edu.school}>
          <div className='cv-school'>
            <h4>{edu.school}</h4>
            <span className='cap'>
              {edu.complete === 'true' ? <FaGraduationCap size='2rem' /> : null}
            </span>
            <em>
              <h5>{edu.graduated}</h5>
            </em>
          </div>
          <div className='cv-edu-mid'>
            <em>
              <p>{edu.degree}</p>
            </em>
            <p>{edu.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
