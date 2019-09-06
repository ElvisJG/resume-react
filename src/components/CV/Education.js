import React from 'react';
import { FaGraduationCap, FaProjectDiagram } from 'react-icons/fa';

export default props => {
  return (
    <div className='education-section'>
      <h3>
        <em>Edu</em>cation
      </h3>

      {props.resume.education.map(edu => (
        <div className='cv-edu' key={edu.school}>
          <div className='cv-school'>
            <h4>{edu.school}</h4>
            <span className='cap'>
              {edu.complete === 'true' ? (
                <FaGraduationCap size='2rem' />
              ) : (
                <FaProjectDiagram size='2rem' />
              )}
            </span>
            <h5>
              <em>{edu.graduated}</em>
            </h5>
          </div>
          <div className='cv-edu-mid'>
            <p>
              <em>{edu.degree}</em>
            </p>
            <p>{edu.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
