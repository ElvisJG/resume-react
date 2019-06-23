import React from 'react';

export default () => {
  return (
    <div className='cv-section'>
      <h3>
        <em>Edu</em>cation
      </h3>

      <div className='cv-edu'>
        <h5>graduated</h5>
        <div className='cv-edu-mid'>
          <em>
            <p>degree</p>
          </em>
          <p>description</p>
        </div>
        <div className='school'>
          <p>school</p>
        </div>
      </div>

      {/* <div className='cv-edu'>
        <h5>March 2015</h5>
        <div className='cv-edu-mid'>
          <em>
            <p>Associates, Computer Science</p>
          </em>
          <p>
            Focus was on Computer Programming and OOP using Java, Visual Basic,
            and Android Studio
          </p>
        </div>
        <div className='school'>
          <p>Fayetteville Tech</p>
        </div>
      </div> */}

      {/* <div className='cv-edu'>
        <h5>March 2013</h5>
        <div className='cv-edu-mid'>
          <em>
            <p>Certificate, Culinary Arts</p>
          </em>
          <p>
            Food Basics, National Environmental Health Association
            Certification, Baking, Culinary Experiences Globally
          </p>
        </div>
        <div className='school'>
          <p>Le Cordon Bleu</p>
        </div>
      </div> */}
    </div>
  );
};
