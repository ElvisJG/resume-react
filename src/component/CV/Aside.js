import React from 'react';

import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

export default props => {
  // const { email, spoken, notions, address } = props.main;
  // const { url, className } = props.social;

  var skills = this.props.data.skills.map(function(skills) {
    var className = 'bar-expand ' + skills.name.toLowerCase();
    return (
      <li key={skills.name}>
        <span style={{ width: skills.confidence }} className={className} />
        <em>{skills.name}</em>
      </li>
    );
  });

  return (
    <div className='aside'>
      <div className='aside-section'>
        <h2>About</h2>
        <p>address.city</p>
        <p>address.state</p>
        <br />
        <p>email</p>
        <div className='icons'>
          <a href='url'>
            <FaLinkedin size='3rem' />
          </a>
          <a href='url'>
            <FaGithubSquare size='3rem' />
          </a>
        </div>
      </div>
      <div className='aside-section'>
        <h2>Languages</h2>
        <p>spoken</p>
        <p>notions</p>
      </div>
      <div className='aside-section'>
        <div className='row skill'>
          <div className='three columns header-col'>
            <h2>
              <span>Programming</span>
            </h2>
          </div>

          <div className='nine columns main-col'>
            <div className='bars'>
              <ul className='skills'>{skills}</ul>
            </div>
          </div>
        </div>
        {/* <h2>Programming</h2>
        <p>JavaScript</p>
        <p>(ES6, Node.js)</p>
        <p>Python, Java, Visual Basic</p>
        <p>CSS3 & HTML5</p> */}
      </div>
    </div>
  );
};
