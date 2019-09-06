// ---------- Imports ---------- //
import React from 'react';
import Particles from '../../animations/Particles';
import Nav from '../Navigation/Navbar';
import ProjectCard from './ProjectCard';

export default props => {
  return (
    <div className='page-portfolio'>
      <Nav />
      <Particles>
        <ProjectCard cardData={props} />
      </Particles>
    </div>
  );
};
